import { client } from "@app/hooks";
import { amazonProduct, newsletterRef } from "../getPages/queries";
import { image } from "./queries";

/*
 * name: useGetBlogs
 * description: Queries all blogs(posts) records from the CMS.
 * param: slug - Optional string for the blog id. If passed it will exclude this specific record from the end result list.
 */
export const useGetBlogs = async (slug?: string) => {
  const today = new Date().toISOString().split("T")[0];

  const queryCondition = slug
    ? `_type == "blog" && slug.current!="${slug}" && (defined(postDate) && postDate <= "${today}" || !defined(postDate))`
    : `_type == "blog" && (defined(postDate) && postDate <= "${today}" || !defined(postDate))`;

  const page = await client.fetch(`*[${queryCondition}]{
      title,
      slug,
      shortDescription,
      _createdAt,
      "postDate": coalesce(postDate, _createdAt),
      blogImage{
              ...asset {
                  _type == 'reference' => @->{
                      url,
                      originalFilename,
                      "dimensions":metadata{
                          ...dimensions{
                              ...
                          }
                      }
                  }
              }
          },
       author{
        _type == 'reference' => @->{
          ...,
          profilePicture{
          ...asset {
                _type == 'reference' => @->{
                  url,
                  originalFilename,
                  "dimensions":metadata{
                      ...dimensions{
                          ...
                  }
                }
              }
            }
          }
        }
      },
      content[]{
        ...,
        content[]{
          ...,
          ${image}
        },
      ${amazonProduct},
      ${newsletterRef},
      }
  } | order(postDate desc)`);

  return page;
};
