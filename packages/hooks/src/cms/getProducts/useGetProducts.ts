import { client } from "@app/hooks";
import { image } from "../getBlogs/queries";

/*
 * name: useGetProducts
 * description: Queries all product records from the CMS.
 */
export const useGetProducts = async () => {
  const products = await client.fetch(`*[_type == "amazonProduct"]{
    title,
    siteStripeUrl,
    price,
    promoPrice,
    promoDueDate,
    rating,
    _updatedAt,
    ${image}
  } | order(_createdAt desc)`);

  return products;
};
