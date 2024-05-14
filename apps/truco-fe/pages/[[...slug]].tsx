import { GetServerSidePropsContext } from "next";
import React from "react";

import { createClient } from "@sanity/client";
import Head from "next/head";
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2022-03-07", // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.NEXT_PUBLIC_SANITY_ACCESS_TOKEN,
});

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
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div>
        <h1>{data.title ?? "Page"}</h1>
      </div>
    </div>
  );
};

export async function getPages(slug: string) {
  const page =
    await client.fetch(`*[_type == "page" && slug.current=="${slug}"]{
    title,
    slug
  }[0]`);
  return page;
}

// This gets called on every request
export async function getServerSideProps({
  resolvedUrl,
}: GetServerSidePropsContext) {
  const data = (await getPages(resolvedUrl)) ?? null;

  if (!data) {
    return { notFound: true };
  }

  // Pass data to the page via props
  return { props: { resolvedUrl, data } };
}

export default Page;
