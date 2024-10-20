import * as Styled from "./PostFeedLayout.styles";
import { PostCard } from "../postCard";
import { useState } from "react";
import { useGetBlogs } from "@app/hooks";
import { BlogProps } from "../../../../types/src/models/blog";
import { SubHeading } from "../../atoms";
import { Adsense } from "@ctrl/react-adsense";

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
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useGetBlogs(path).then((res) => {
      setCurrentPage(path);
      res && setPosts(res);
    });
  };

  (!posts || currentPage != path) && getPosts();
  return (
    <Styled.Container>
      {/* temporary background until ads gets approved by google */}
      <Styled.AdsContainer>
        <Adsense client="ca-pub-8361311161311634" slot="222222" />
      </Styled.AdsContainer>
      <Styled.MainContainer>
        {children}
        <Styled.ContentAdsContainer>
          <Adsense client="ca-pub-8361311161311634" slot="222223" />
        </Styled.ContentAdsContainer>
      </Styled.MainContainer>
      <Styled.SideContainer>
        <SubHeading text="You May Also Like" />
        {posts?.map((post, index) => (
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
