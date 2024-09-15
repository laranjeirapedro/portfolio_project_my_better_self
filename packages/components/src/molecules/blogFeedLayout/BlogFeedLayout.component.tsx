import { useEffect, useState } from "react";
import { Section } from "../../organisms";
import * as Styled from "./BlogFeedLayout.styles";
import { PostCard } from "../postCard";
import { useGetBlogs } from "@app/hooks";
import { BlogProps } from "../../../../types/src/models/blog";
import { spacing } from "@app/styles";
import { Adsense } from "@ctrl/react-adsense";

export const BlogFeedLayout = ({ children }: any) => {
  const [posts, setPosts] = useState<BlogProps[] | null>();

  useEffect(() => {
    const getPosts = async () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      await useGetBlogs().then((res) => {
        res && setPosts(res);
      });
    };

    !posts && getPosts();
  }, [posts]);

  return (
    <Section>
      <Styled.Container>
        <Styled.MainContainer>
          {children}
          <Styled.PostContainer>
            {posts?.map((post, index) => (
              <Styled.PostWrapper key={post.slug.current} gap={spacing.s}>
                <PostCard key={index} data={post} />
              </Styled.PostWrapper>
            ))}
          </Styled.PostContainer>
        </Styled.MainContainer>
        <Styled.SideContainer>
          <Adsense
            client="ca-pub-8361311161311634"
            slot="222222"
            style={{ width: "100%", height: 600 }}
          />
        </Styled.SideContainer>
      </Styled.Container>
    </Section>
  );
};
