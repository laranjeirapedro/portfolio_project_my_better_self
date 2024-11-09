import { client } from "@app/hooks";
import { image } from "../getBlogs/queries";

/*
 * name: useGetProducts
 * description: Queries all product records from the CMS.
 */
export const useGetProducts = async (categorySlug?: string) => {
  const queryCondition = categorySlug
    ? `_type == "amazonProduct" && category -> slug.current=="${categorySlug}"`
    : `_type == "amazonProduct"`;
  const products = await client.fetch(`*[${queryCondition}]{
    title,
    siteStripeUrl,
    price,
    promoPrice,
    promoDueDate,
    rating,
    _updatedAt,
    ${image},
    category{
      _type == 'reference' => @->{
        title,
        slug,
        description,
        icon,
      }
    }
  } | order(_createdAt desc)`);

  return products;
};
