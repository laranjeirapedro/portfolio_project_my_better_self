import { client } from "@app/hooks";

export const useGetPagePaths = async () => {
  const page = await client.fetch(`*[_type == "page"]{
    slug,
    "updatedAt": _updatedAt
  }`);

  return page;
};
