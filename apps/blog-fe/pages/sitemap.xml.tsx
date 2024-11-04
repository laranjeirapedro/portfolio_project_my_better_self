// pages/sitemap.xml.js
import { useGetPagePaths, useGetPostPaths } from "@app/hooks";
import { GetServerSideProps } from "next";

const Sitemap = () => {
  return null; // This page will never be rendered, only used to generate the XML
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const pages = (await useGetPagePaths()) ?? [];
  const posts = (await useGetPostPaths()) ?? [];

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL; // Make sure to add this env variable

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page: { slug: { current: string }; updatedAt: string }) => {
            return `
          <url>
            <loc>${baseUrl}${page.slug.current}</loc>
            <lastmod>${page.updatedAt}</lastmod>
            <priority>0.70</priority>
          </url>
          `;
          })
          .join("")}
        ${posts
          .map((post: { slug: { current: string }; updatedAt: string }) => {
            return `
          <url>
            <loc>${baseUrl}/blog/${post.slug.current}</loc>
            <lastmod>${post.updatedAt}</lastmod>
            <priority>0.80</priority>
          </url>
          `;
          })
          .join("")}
      </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default Sitemap;
