import { Section } from '../../organisms';
import * as Styled from './BlogList.styles';
import { PostCard } from '../postCard';
import { useGetBlogs } from '@app/hooks';
import { spacing } from '@app/styles';

export const BlogList = ({ children }: any) => {
  const { posts } = useGetBlogs();

  return (
    <Section>
      <Styled.Container>
        {children}
        <Styled.PostContainer>
          {posts?.map((post, index) => (
            <Styled.PostWrapper key={post.slug.current} gap={spacing.s}>
              <PostCard key={index} data={post} />
            </Styled.PostWrapper>
          ))}
          {posts?.length === 0 &&
            Array(4)
              .fill(0)
              .map(() => (
                <Styled.PostWrapper gap={spacing.s}>
                  <PostCard />
                </Styled.PostWrapper>
              ))}
        </Styled.PostContainer>
      </Styled.Container>
    </Section>
  );
};
