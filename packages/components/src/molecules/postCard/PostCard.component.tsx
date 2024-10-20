import { fontSize, spacing } from "@app/styles";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SubHeading, Paragraph, Link, Image, Spacer } from "../../atoms";
import * as Styled from "./PostCard.styles";
import { useRouter } from "next/navigation";
import { linkClickedAnalytics } from "@app/hooks";
import { useMemo } from "react";

export type PostCardProps = {
  data?: {
    title: string;
    shortDescription: string;
    slug: { current: string };
    blogImage: { url: string; originalFilename: string };
  };
  isSideContent?: boolean;
};

export const PostCard = ({ data, isSideContent }: PostCardProps) => {
  const router = useRouter();

  const path = useMemo(() => `/blog/${data?.slug.current}`, []);

  const onClickPost = () => {
    linkClickedAnalytics({ path });

    router.push(path);
  };

  if (!isSideContent) {
    return (
      <Styled.MainContentCardWrapper onClick={onClickPost}>
        {data && (
          <Image
            data={{
              image: {
                url: data.blogImage.url + "?h=180",
                originalFilename: data.blogImage.originalFilename ?? "",
              },
              height: 200,
              borderRadius: "8px 8px 0px 0px",
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
                  fontWeight: "500",
                  fontSize: fontSize.xl,
                  letterSpacing: "0.04em",
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
    );
  }

  return (
    <Styled.SideContentCardWrapper onClick={onClickPost}>
      {data && (
        <Image
          data={{
            image: {
              url: data.blogImage.url + "?h=150",
              originalFilename: data.blogImage.originalFilename ?? "",
            },
            height: 100,
            borderRadius: "8px 8px 0px 0px",
          }}
        />
      )}
      {!data && <Skeleton borderRadius="8px 8px 0px 0px" height={100} />}
      <Styled.MainContentTextWrapper>
        {data && (
          <Paragraph
            text={data.title}
            style={{ fontWeight: "bold" }}
            numberOfLines={2}
          />
        )}
        {!data && <Skeleton height={spacing.l} />}
        {data && <Paragraph text={data.shortDescription} numberOfLines={3} />}
        {!data && <Skeleton count={3} />}
      </Styled.MainContentTextWrapper>
    </Styled.SideContentCardWrapper>
  );
};
