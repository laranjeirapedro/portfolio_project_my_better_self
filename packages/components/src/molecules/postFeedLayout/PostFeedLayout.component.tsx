import { useGetBlogs } from '@app/hooks';
import React from 'react';
import { SubHeading } from '../../atoms';
import { PostCard } from '../postCard';
import * as Styled from './PostFeedLayout.styles';

export const PostFeedLayout = ({ children, path }: { children: React.ReactNode; path: string }) => {
  const { posts } = useGetBlogs(path);

  return (
    <Styled.Container>
      <Styled.MainContainer>{children}</Styled.MainContainer>
      <Styled.SideContainer>
        <SubHeading text={'You May Also Like'} />
        {posts?.slice(0, 6).map((post, index) => (
          <PostCard key={`${post.title}-${index}`} data={post as never} isSideContent={true} />
        ))}
        {!posts &&
          Array(3)
            .fill(0)
            .map((_, index) => <PostCard isSideContent={true} key={`skeleton-${index}`} />)}
      </Styled.SideContainer>
    </Styled.Container>
  );
};
