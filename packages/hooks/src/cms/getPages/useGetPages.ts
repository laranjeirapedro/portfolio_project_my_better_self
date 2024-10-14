import { client } from "@app/hooks";
import { amazonProduct, image, newsletterRef } from "./queries";

export const useGetPages = async (slug: string) => {
  const page =
    await client.fetch(`*[_type == "page" && slug.current=="${slug}"]{
    title,
    slug,
    content[]{
      ...,
      content[]{
        ...,
        ${image},
        },
      ${amazonProduct},
      ${newsletterRef},
    }
  }[0]`);

  return page;
};
