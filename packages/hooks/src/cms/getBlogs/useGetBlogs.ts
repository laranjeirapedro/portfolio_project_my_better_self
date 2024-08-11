import { client } from "@app/hooks";
import { image } from "./queries";

export const useGetBlogs = async (slug: string) => {
  const page =
    await client.fetch(`*[_type == "blog" && slug.current=="${slug}"]{
    title,
    slug,
    content[]{
      ...,
      content[]{
        ...,
        ${image}
      }
    }
  }[0]`);

  return page;
};
