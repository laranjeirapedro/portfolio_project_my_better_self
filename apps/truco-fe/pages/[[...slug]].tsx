import { GetServerSidePropsContext } from "next";
import React from "react";

import Head from "next/head";

import { useGetPages } from "@app/hooks";
import { ComponentLibrary } from "../utils";

type PageProps = {
  data: {
    title: string;
    slug: {
      current: string;
      _type: string;
    };
    content: Array<any>;
  };
};

const Page = ({ data }: PageProps) => {
  return (
    <div>
      <Head>
        <title>{`Global Truco | ${data.title}`}</title>
        <meta
          property="og:title"
          content={`Global Truco | ${data.title}`}
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
            alignItems: "center",
            minHeight: "calc(100vh - 101px)",
          }}
        >
          <ComponentLibrary content={data.content} />
        </div>
      </div>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps({
  resolvedUrl,
}: GetServerSidePropsContext) {
  const data = (await useGetPages(resolvedUrl)) ?? null;

  if (!data) {
    return { notFound: true };
  }

  // Pass data to the page via props
  return { props: { resolvedUrl, data } };
}

export default Page;
