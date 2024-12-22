import { useQuery } from '@tanstack/react-query';
import { client } from '@app/hooks';
import { image } from './queries';

const getLatestBlog = async () => {
  const today = new Date().toISOString();

  return await client.fetch(`*[_type == "blog"  && (dateTime(postDate) <= dateTime("${today}") || !defined(postDate))]{
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
};

export const useGetLatestBlog = () => {
  return useQuery({
    queryKey: ['latestBlog'],
    queryFn: getLatestBlog,
    staleTime: 2 * 60 * 60 * 1000, // 2 hours in milliseconds
    cacheTime: 2 * 60 * 60 * 1000,
  });
};
