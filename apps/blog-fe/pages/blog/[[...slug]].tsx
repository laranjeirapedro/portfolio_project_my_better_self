import { GetStaticPaths, GetStaticPropsContext } from "next";
import React from "react";

import Head from "next/head";

import { useGetBlogs, useGetPostPaths } from "@app/hooks";
import { Block, BlogBanner, PostFeedLayout } from "@app/components";

type BlogProps = {
  data: {
    title: string;
    slug: {
      current: string;
      _type: string;
    };
    content: Array<any>;
  };
  header: {
    siteName: string;
  };
};

const Blog = ({ data, header }: BlogProps) => {
  return (
    <div>
      <Head>
        <title>{`${header.siteName} | ${data.title}`}</title>
        <meta
          property="og:title"
          content={`${header.siteName} | ${data.title}`}
          key={data.title}
        />
      </Head>
      <div>
        <div
          style={{
            maxWidth: 1280,
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            minHeight: "calc(100vh - 101px)",
          }}
        >
          <BlogBanner blogData={data as never} />
          <PostFeedLayout>
            <Block content={data.content} />
          </PostFeedLayout>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = (async () => {
  const data = (await useGetPostPaths()) ?? null;

  const slugs: any = data.map((page: any) => [page.slug.current]);

  return {
    paths: [
      { params: { slug: undefined } },
      ...slugs.map((slug: string) => ({ params: { slug } })),
    ],
    fallback: "blocking", // false or "blocking"
  };
}) satisfies GetStaticPaths;

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const path = `${Array(params?.slug).join("/") ?? ""}`;

  const data = (await useGetBlogs(path)) ?? null;

  if (!data) {
    return { notFound: true };
  }

  // Pass data to the page via props
  return { props: { resolvedUrl: path, data } };
}

export default Blog;
