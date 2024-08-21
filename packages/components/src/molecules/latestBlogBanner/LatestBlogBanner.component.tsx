import { useEffect, useState } from "react";
import { BlogBanner } from "../..";
import { useGetLatestBlog } from "@app/hooks";
import { BlogProps } from "../../../../types/src/models/blog";

export const LatestBlogBanner = () => {
  const [blogData, setBlogData] = useState<BlogProps | null>();

  useEffect(() => {
    const getLatestBlog = async () => {
      await useGetLatestBlog().then((res) => {
        res && setBlogData(res);
      });
    };

    !blogData && getLatestBlog();
  }, []);

  if (!blogData) return null;

  return <BlogBanner blogData={blogData} isClickable />;
};
