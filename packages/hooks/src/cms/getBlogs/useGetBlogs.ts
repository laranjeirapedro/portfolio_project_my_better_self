import { client } from "@app/hooks";
import { image } from "./queries";

export const useGetBlogs = async (slug: string) => {
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
      content[]{
        ...,
        ${image}
      }
    }
  }[0]`);

  return page;
};
