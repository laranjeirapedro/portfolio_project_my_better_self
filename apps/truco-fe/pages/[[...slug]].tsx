import { GetServerSidePropsContext } from "next";
import React from "react";

import Head from "next/head";

import { useGetPages } from "@app/hooks";

type PageProps = {
  data: {
    title: string;
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
        {/* Placeholder */}
        <div
          style={{
            maxWidth: 1280,
            margin: "auto",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            minHeight: "calc(100vh - 101px)",
          }}
        >
          <div
            style={{
              margin: "auto",
            }}
          >
            <h1>{data.title ?? "Page"}</h1>
          </div>
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
