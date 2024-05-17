import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2022-03-07", // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.NEXT_PUBLIC_SANITY_ACCESS_TOKEN,
});

export const useGetPages = async (slug: string) => {
  const page =
    await client.fetch(`*[_type == "page" && slug.current=="${slug}"]{
      title,
      slug
    }[0]`);
  return page;
};
