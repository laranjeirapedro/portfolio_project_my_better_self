import { client } from "@app/hooks";
import { image } from "./queries";

export const useGetLatestBlog = async () => {
  const today = new Date().toISOString().split("T")[0];

  const page =
    await client.fetch(`*[_type == "blog"  && (postDate <= "${today}" || !defined(postDate))]{
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
      }
    }
  } | order(postDate desc)[0]`);

  return page;
};
