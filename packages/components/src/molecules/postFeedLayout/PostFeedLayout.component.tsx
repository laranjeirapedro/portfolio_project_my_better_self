import { useGetBlogs } from "@app/hooks";
import React, { useCallback, useEffect, useState } from 'react';
import { BlogProps } from "../../../../types/src/models/blog";
import { SubHeading } from "../../atoms";
import { PostCard } from "../postCard";
import * as Styled from "./PostFeedLayout.styles";

export const PostFeedLayout = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) => {
  const [posts, setPosts] = useState<BlogProps[] | null>();
  const [currentPage, setCurrentPage] = useState<string>();

  const getPosts = useCallback(async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useGetBlogs(path).then((res) => {
      setCurrentPage(path);
      res && setPosts(res);
    });
  }, [setCurrentPage, setPosts, path]);

  useEffect(() => {
    (!posts || currentPage != path) && getPosts();
  }, [path]);

  return (
    <Styled.Container>
      <Styled.MainContainer>{children}</Styled.MainContainer>
      <Styled.SideContainer>
        <SubHeading text={"You May Also Like"} />
        {posts
          ?.slice(0, 6)
          .map((post, index) => (
            <PostCard key={`${post.title}-${index}`} data={post} isSideContent={true} />
          ))}
        {!posts &&
          Array(3)
            .fill(0)
            .map((_, index) => <PostCard isSideContent={true} key={`skeleton-${index}`} />)}
      </Styled.SideContainer>
    </Styled.Container>
  );
};
