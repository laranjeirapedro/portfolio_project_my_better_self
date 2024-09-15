import { fontSize, spacing } from "@app/styles";
import { Paragraph, Link, Image, Spacer } from "../../atoms";
import {
  SideContentCardWrapper,
  MainContentCardWrapper,
  MainContentTextWrapper,
} from "./PostCard.styles";
import { useRouter } from "next/navigation";

export type PostCardProps = {
  data: {
    title: string;
    shortDescription: string;
    slug: { current: string };
    blogImage: { url: string; originalFilename: string };
  };
  isSideContent?: boolean;
};

export const PostCard = ({ data, isSideContent }: PostCardProps) => {
  const router = useRouter();

  const onClickPost = () => {
    router.push(`/blog/${data.slug.current}`);
  };

  if (!isSideContent) {
    return (
      <MainContentCardWrapper onClick={onClickPost}>
        <Image
          data={{
            image: {
              url: data.blogImage.url,
              originalFilename: data.blogImage.originalFilename,
            },
            height: 200,
            borderRadius: "8px 8px 0px 0px",
          }}
        />
        <MainContentTextWrapper>
          <Paragraph
            text={data.title}
            style={{
              fontWeight: "bold",
              fontSize: fontSize.m,
              letterSpacing: "0.04em",
            }}
          />
          <Spacer height={spacing.xxs} />
          <Paragraph text={data.shortDescription} />
        </MainContentTextWrapper>
      </MainContentCardWrapper>
    );
  }

  return (
    <SideContentCardWrapper>
      <Paragraph text={data.title} style={{ fontWeight: "bold" }} />
      <Paragraph text={data.shortDescription} />
      <Link linkText="Read More >" path={data.slug} />
    </SideContentCardWrapper>
  );
};
