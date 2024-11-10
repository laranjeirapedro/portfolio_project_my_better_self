import { client } from "@app/hooks";

/*
 * name: useGetProductCategories
 * description: Queries all product category records from the CMS.
 */
export const useGetProductCategories = async () => {
  const categories = await client.fetch(`*[_type == "productCategory"]{
    title,
    slug,
    shortDescription,
    _createdAt,
  } | order(_createdAt desc)`);

  return categories;
};
