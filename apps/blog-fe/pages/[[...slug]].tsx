import { GetStaticPaths, GetStaticPropsContext } from "next";
import React from "react";

import Head from "next/head";

import { useGetPagePaths, useGetPages } from "@app/hooks";
import { Block } from "@app/components";
import { ContentWrapper } from "../components";

type PageProps = {
  data: {
    title: string;
    slug: {
      current: string;
      _type: string;
    };
    contentTop: Array<any>;
    content: Array<any>;
  };
  header: {
    siteName: string;
  };
};

const Page = ({ data, header }: PageProps) => {
  if (!data) return null;

  return (
    <div>
      <Head>
        <title>{`${header?.siteName ?? ""} | ${data.title}`}</title>
        <meta
          property="og:title"
          content={`${header?.siteName ?? ""} | ${data.title}`}
          key={data.title}
        />
      </Head>
      <ContentWrapper>
        <Block content={data.content} />
      </ContentWrapper>
    </div>
  );
};

export const getStaticPaths = (async () => {
  const data = (await useGetPagePaths()) ?? null;

  const slugs: any = data.map((page: any) =>
    page.slug.current.substring(1).split("/")
  );

  return {
    paths: [
      { params: { slug: undefined } },
      ...slugs.map((slug: string) => ({ params: { slug } })),
    ],
    fallback: "blocking", // false or "blocking"
  };
}) satisfies GetStaticPaths;

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const path = `/${Array(params?.slug).join("/") ?? ""}`;

  const data = (await useGetPages(path)) ?? null;

  if (!data) {
    return { notFound: true };
  }

  // Pass data to the page via props
  return { props: { resolvedUrl: path, data } };
}

export default Page;
