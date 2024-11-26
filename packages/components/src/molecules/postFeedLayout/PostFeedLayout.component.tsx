import React from 'react'
import * as Styled from "./PostFeedLayout.styles";
import { PostCard } from "../postCard";
import { useCallback, useEffect, useState } from "react";
import { useGetBlogs } from "@app/hooks";
import { BlogProps } from "../../../../types/src/models/blog";
import { SubHeading } from "../../atoms";

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
  },[setCurrentPage,setPosts ,path]);

  useEffect(()=>{
    (!posts || currentPage != path) && getPosts();
  },[path]);

  return (
    <Styled.Container>
      <Styled.MainContainer>{children}</Styled.MainContainer>
      <Styled.SideContainer>
        <SubHeading text={"You May Also Like"} />
        {posts?.slice(0,6).map((post, index) => (
          <PostCard key={index} data={post} isSideContent={true} />
        ))}
        {!posts &&
          Array(3)
            .fill(0)
            .map(() => <PostCard isSideContent={true} />)}
      </Styled.SideContainer>
    </Styled.Container>
  );
};
