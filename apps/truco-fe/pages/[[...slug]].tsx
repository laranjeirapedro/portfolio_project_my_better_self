import { GetServerSidePropsContext } from "next";
import React from "react";

import Head from "next/head";
import { useGetPages } from "@app/hooks";
import { Link } from "@app/components";

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
        {/* Remove Link */}
        <Link linkText="About" path="/about" />
        <h1>{data.title ?? "Page"}</h1>
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
