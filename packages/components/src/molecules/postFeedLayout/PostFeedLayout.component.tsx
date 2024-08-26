import * as Styled from "./PostFeedLayout.styles";
import { PostCard } from "../postCard";
import { useState } from "react";
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

  const getPosts = async () => {
    await useGetBlogs(path).then((res) => {
      setCurrentPage(path);
      res && setPosts(res);
    });
  };

  (!posts || currentPage != path) && getPosts();

  return (
    <Styled.Container>
      <Styled.SideContainer>ads</Styled.SideContainer>
      <Styled.MainContainer>{children}</Styled.MainContainer>
      <Styled.SideContainer>
        <SubHeading text="Other Posts" />
        {posts?.map((post, index) => (
          <PostCard key={index} data={post} isSideContent={true} />
        ))}
      </Styled.SideContainer>
    </Styled.Container>
  );
};
