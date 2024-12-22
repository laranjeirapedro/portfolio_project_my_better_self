import { client } from '@app/hooks';
import { BlogProps } from '@app/types';
import { amazonProduct, newsletterRef } from '../getPages/queries';
import { image } from './queries';
import { useQuery } from '@tanstack/react-query';

const fetchBlogs = async (slug?: string): Promise<BlogProps[]> => {
  const today = new Date().toISOString();

  const queryCondition = slug
    ? `_type == "blog" && slug.current!="${slug}" && (defined(postDate) && dateTime(postDate) <= dateTime("${today}") || !defined(postDate))`
    : `_type == "blog" && (defined(postDate) && dateTime(postDate) <= dateTime("${today}") || !defined(postDate))`;

  const blogs = await client.fetch(`*[${queryCondition}]{
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

  return blogs;
};

/*
 * name: useGetBlogs
 * description: Queries all blogs(posts) records from the CMS.
 * param: slug - Optional string for the blog id. If passed it will exclude this specific record from the end result list.
 */
export const useGetBlogs = (slug?: string) => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['blogs', slug],
    queryFn: () => fetchBlogs(slug),
  });

  return {
    posts: data,
    isLoading,
    isError,
    error,
  };
};
