import React, { useEffect, useMemo, useState } from "react";
import { Section } from "../../organisms";
import * as Styled from "./BlogList.styles";
import { PostCard } from "../postCard";
import { useGetBlogs } from "@app/hooks";
import { BlogProps } from "../../../../types/src/models/blog";
import { spacing } from "@app/styles";


export const BlogList = ({ children }: any) => {
  const [posts, setPosts] = useState<BlogProps[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      await useGetBlogs().then((res) => {
        res && setPosts(res);
      });
    };

    !posts.length && getPosts();
  }, [posts]);

  return (
    <Section>
      <Styled.Container>
        {children}
        <Styled.PostContainer>
          {posts.map((post, index) => (
            <Styled.PostWrapper key={post.slug.current} gap={spacing.s}>
              <PostCard key={index} data={post} />
            </Styled.PostWrapper>
          ))}
        </Styled.PostContainer>
      </Styled.Container>
    </Section>
  );
};
