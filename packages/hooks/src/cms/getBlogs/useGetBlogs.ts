import { client } from "@app/hooks";
import { image } from "./queries";

/*
 * name: useGetBlogs
 * description: Queries all blogs(posts) records from the CMS.
 * param: slug - Optional string for the blog id. If passed it will exclude this specific record from the end result list.
 */
export const useGetBlogs = async (slug?: string) => {
  const queryCondition = slug
    ? `_type == "blog" && slug.current!="${slug}"`
    : `_type == "blog"`;
  const page = await client.fetch(`*[${queryCondition}]{
      title,
      slug,
      shortDescription,
      _createdAt,
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
        }
      }
  }`);

  return page;
};
