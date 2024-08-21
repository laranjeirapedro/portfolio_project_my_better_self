import { client } from "@app/hooks";
import { image } from "./queries";

export const useGetLatestBlog = async () => {
  const page = await client.fetch(`*[_type == "blog"]{
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
  } | order(_createdAt desc)[0]`);

  return page;
};
