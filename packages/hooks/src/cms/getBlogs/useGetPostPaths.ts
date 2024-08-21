import { client } from "@app/hooks";

export const useGetPostPaths = async () => {
  const page = await client.fetch(`*[_type == "blog"]{
    slug,
  }`);

  return page;
};
