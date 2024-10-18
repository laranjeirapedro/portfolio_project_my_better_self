import { GetStaticPaths, GetStaticPropsContext } from "next";
import React from "react";

import Head from "next/head";

import { useGetBlog, useGetPostPaths } from "@app/hooks";
import {
  Block,
  BlogBanner,
  NewsletterCard,
  PostFeedLayout,
} from "@app/components";
import { ContentWrapper } from "../../components";

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
  resolvedUrl: string;
};

const Blog = ({ data, resolvedUrl, header }: BlogProps) => {
  return (
    <div>
      <Head>
        <title>{`${header.siteName} | ${data.title}`}</title>
        <meta
          property="og:title"
          content={`${header.siteName} | ${data.title}`}
          key={data.title}
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-8361311161311634"
        ></meta>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8361311161311634"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <ContentWrapper>
        <BlogBanner blogData={data as never} />
        <PostFeedLayout path={resolvedUrl}>
          <Block content={data.content} />
        </PostFeedLayout>
        <NewsletterCard />
      </ContentWrapper>
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

  const data = (await useGetBlog(path)) ?? null;

  if (!data) {
    return { notFound: true };
  }

  // Pass data to the page via props
  return { props: { resolvedUrl: path, data } };
}

export default Blog;
