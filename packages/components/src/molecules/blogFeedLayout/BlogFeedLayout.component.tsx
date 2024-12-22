import { Section } from '../../organisms';
import * as Styled from './BlogFeedLayout.styles';
import { PostCard } from '../postCard';
import { useGetBlogs } from '@app/hooks';
import { spacing } from '@app/styles';
import { Adsense } from '@ctrl/react-adsense';

export const BlogFeedLayout = ({ children }: any) => {
  const { posts } = useGetBlogs();

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
          <Adsense client="ca-pub-8361311161311634" slot="222222" />
        </Styled.SideContainer>
      </Styled.Container>
    </Section>
  );
};
