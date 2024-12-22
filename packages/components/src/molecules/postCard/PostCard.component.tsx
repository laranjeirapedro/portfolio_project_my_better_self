import { linkClickedAnalytics } from '@app/hooks';
import { fontSize, spacing } from '@app/styles';
import { useRouter } from 'next/navigation';
import React, { memo, useMemo } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Image, Paragraph, Spacer } from '../../atoms';
import * as Styled from './PostCard.styles';

export type PostCardProps = {
  data?: {
    title: string;
    shortDescription: string;
    slug: { current: string };
    blogImage: { url: string; originalFilename: string };
  };
  isSideContent?: boolean;
};

export const PostCard = memo(({ data, isSideContent = false }: PostCardProps) => {
  const router = useRouter();

  const path = useMemo(() => `/blog/${data?.slug.current}`, [data]);

  const onClickPost = () => {
    linkClickedAnalytics({ path });

    router.push(path);
  };

  return (
    <>
      {/* Main Version */}
      <Styled.MainContentCardWrapper onClick={onClickPost} isSideContent={isSideContent}>
        {data && (
          <Image
            data={{
              image: {
                url: data.blogImage.url,
                originalFilename: data.blogImage.originalFilename ?? '',
              },
              height: 200,
              borderRadius: '8px 8px 0px 0px',
            }}
          />
        )}
        {!data && <Skeleton borderRadius="8px 8px 0px 0px" height={200} />}
        <Styled.MainContentTextWrapper>
          <Styled.TitleWrapper>
            {data && (
              <Paragraph
                text={data?.title}
                style={{
                  fontWeight: '500',
                  fontSize: fontSize.xl,
                  letterSpacing: '0.04em',
                }}
                numberOfLines={2}
              />
            )}
            {!data && <Skeleton height={spacing.xl} />}
          </Styled.TitleWrapper>
          <Spacer height={spacing.xxs} />
          {data && <Paragraph text={data.shortDescription} numberOfLines={4} />}
          {!data && <Skeleton count={4} />}
        </Styled.MainContentTextWrapper>
      </Styled.MainContentCardWrapper>
      {/* Smaller Version */}
      <Styled.SideContentCardWrapper onClick={onClickPost} isSideContent={isSideContent}>
        {data && (
          <Image
            data={{
              image: {
                url: data.blogImage.url,
                originalFilename: data.blogImage.originalFilename ?? '',
              },
              height: 100,
              borderRadius: '8px 8px 0px 0px',
            }}
          />
        )}
        {!data && <Skeleton borderRadius="8px 8px 0px 0px" height={100} />}
        <Styled.MainContentTextWrapper>
          {data && <Paragraph text={data.title} style={{ fontWeight: 'bold' }} numberOfLines={2} />}
          {!data && <Skeleton height={spacing.l} />}
          {data && <Paragraph text={data.shortDescription} numberOfLines={3} />}
          {!data && <Skeleton count={3} />}
        </Styled.MainContentTextWrapper>
      </Styled.SideContentCardWrapper>
    </>
  );
});
