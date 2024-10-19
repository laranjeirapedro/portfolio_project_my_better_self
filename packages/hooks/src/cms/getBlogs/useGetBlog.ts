import { client } from "@app/hooks";
import { image } from "./queries";
import { amazonProduct, newsletterRef } from "../getPages/queries";

export const useGetBlog = async (slug: string) => {
  const page =
    await client.fetch(`*[_type == "blog" && slug.current=="${slug}"]{
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
      ${image},
      _type == 'image' =>{
      ...,
      "image":   asset {
        ...,
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
      content[]{
        ...,
        ${image}
        },
        ${amazonProduct},
        ${newsletterRef},
    }
  }[0]`);

  return page;
};
