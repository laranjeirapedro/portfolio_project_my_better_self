import { BlogBanner } from '../..';
import { useGetLatestBlog } from '@app/hooks';

export const LatestBlogBanner = () => {
  const { data: blogData } = useGetLatestBlog();

  return <BlogBanner blogData={blogData as never} isClickable />;
};
