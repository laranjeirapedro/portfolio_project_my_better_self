import { client } from "@app/hooks";
import { amazonProduct, newsletterRef } from "../getPages/queries";
import { image } from "./queries";

export const useGetBlog = async (slug: string) => {
  const page =
    await client.fetch(`*[_type == "blog" && slug.current=="${slug}"]{
    title,
    slug,
    shortDescription,
    _createdAt,
    postDate,
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
      _type == 'amazonProductsCarousel' =>{
      ...,
      "products":products[] {
        ...,
          _type == 'reference' => @->{
              ...,
              ${image}
          }           
      },
    },
      _type == 'expediaWidget' => {
        ...,
        className,
        widget,
        program,
        lobs,
        network,
        camref,
        layout,
        imageType,
        message,
        link,
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
