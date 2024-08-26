import { useEffect, useState } from "react";
import { Block, Section } from "../../organisms";
import * as Styled from "./BlogFeedLayout.styles";
import { PostCard } from "../postCard";
import { useGetBlogs } from "@app/hooks";
import { BlogProps } from "../../../../types/src/models/blog";

export const BlogFeedLayout = ({ children }: any) => {
  const [posts, setPosts] = useState<BlogProps | null>();

  useEffect(() => {
    const getPosts = async () => {
      await useGetBlogs().then((res) => {
        res && setPosts(res);
      });
    };

    !posts && getPosts();
  }, []);

  return (
    <Section>
      <Styled.Container>
        <Styled.MainContainer>
          {children}
          <Styled.PostContainer>
            {posts?.map((post, index) => (
              <Styled.PostWrapper>
                <PostCard key={index} data={post} />
              </Styled.PostWrapper>
            ))}
          </Styled.PostContainer>
        </Styled.MainContainer>
        <Styled.SideContainer>ads</Styled.SideContainer>
      </Styled.Container>
    </Section>
  );
};
