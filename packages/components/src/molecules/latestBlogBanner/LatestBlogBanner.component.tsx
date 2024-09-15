import { useEffect, useState } from "react";
import { BlogBanner } from "../..";
import { useGetLatestBlog } from "@app/hooks";
import { BlogProps } from "../../../../types/src/models/blog";

export const LatestBlogBanner = () => {
  const [blogData, setBlogData] = useState<BlogProps | null>();

  useEffect(() => {
    const getLatestBlog = async () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      await useGetLatestBlog().then((res) => {
        res && setBlogData(res);
      });
    };

    !blogData && getLatestBlog();
  }, [blogData]);

  if (!blogData) return null;

  return <BlogBanner blogData={blogData} isClickable />;
};
