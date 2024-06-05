import { client } from "@app/hooks";

export const useGetPages = async (slug: string) => {
  const page =
    await client.fetch(`*[_type == "page" && slug.current=="${slug}"]{
      title,
      slug,
    }[0]`);
  return page;
};
