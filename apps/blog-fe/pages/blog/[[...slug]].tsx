import { GetServerSidePropsContext } from "next";
import React from "react";

import Head from "next/head";

import { useGetBlogs } from "@app/hooks";
import { Block } from "@app/components";

type BlogProps = {
  data: {
    title: string;
    slug: {
      current: string;
      _type: string;
    };
    content: Array<any>;
  };
};

const Blog = ({ data }: BlogProps) => {
  return (
    <div>
      <Head>
        {/* TODO: update this value to come from CMS Settings */}
        <title>{`My Better Self | Post: ${data.title}`}</title>
        {/* TODO: update this value to come from CMS Settings */}
        <meta
          property="og:title"
          content={`My Better Self | Post: ${data.title}`}
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
          <Block content={data.content} />
        </div>
      </div>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps({
  resolvedUrl,
  res,
}: GetServerSidePropsContext) {
  // This value is considered fresh for ten seconds (s-maxage=300).
  // If a request is repeated within the next 5 minutes, the previously
  // cached value will still be fresh. If the request is repeated before 20 minutes,
  // the cached value will be stale but still render (stale-while-revalidate=1200).
  //
  // In the background, a revalidation request will be made to populate the cache
  // with a fresh value. If you refresh the page, you will see the new value.
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=300, stale-while-revalidate=1200"
  );

  const data = (await useGetBlogs(resolvedUrl.replace("/blog/", ""))) ?? null;

  if (!data) {
    return { notFound: true };
  }

  // Pass data to the page via props
  return { props: { resolvedUrl, data } };
}

export default Blog;
