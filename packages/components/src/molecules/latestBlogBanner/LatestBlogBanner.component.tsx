import { useEffect, useState } from "react";
import { Caption, Heading, Image, Link, Paragraph } from "../../atoms";
import styled from "@emotion/styled";
import { borderRadius, spacing } from "@app/styles";
import { useGetLatestBlog } from "@app/hooks";
import { BlogProps } from "../../../../types/src/models/blog";
import { format } from "date-fns";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { useRouter } from "next/navigation";

const Container = styled.div`
  padding-top: ${spacing.s}px;
`;

const BlogWrapper = styled.div`
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  border-radius: ${borderRadius.s}px;
  overflow: hidden;
`;

const ContentWraper = styled.div`
  margin-bottom: ${spacing.xxs}px;
`;

const ProfileImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 50%;
  margin-right: ${spacing.xxs}px;
`;

const AuthorWrapper = styled.div`
  margin-top: ${spacing.xxs}px;
  margin-bottom: ${spacing.xxs}px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-right: ${spacing.xxs}px;
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${spacing.s}px;
`;

export const LatestBlogBanner = () => {
  const [blogData, setBlogData] = useState<BlogProps | null>();
  const router = useRouter();

  useEffect(() => {
    const getLatestBlog = async () => {
      await useGetLatestBlog().then((res) => {
        res && setBlogData(res);
      });
    };

    !blogData && getLatestBlog();
  }, []);

  if (!blogData) return null;

  const onClick = () => {
    router.push(`/blog/${blogData.slug.current}`);
  };

  return (
    <Container>
      <BlogWrapper onClick={onClick}>
        <ContentWraper>
          <Heading text={blogData.title} />
          <Paragraph text={blogData.shortDescription} />
        </ContentWraper>
        <ImageWrapper>
          <Image
            data={{
              image: {
                url: blogData.blogImage.url,
                originalFilename: blogData.blogImage.originalFilename,
              },
              height: 300,
            }}
          />
        </ImageWrapper>
      </BlogWrapper>
      <AuthorWrapper>
        <Row>
          <ProfileImageWrapper>
            <Image
              data={{
                image: {
                  url: blogData.blogImage.url,
                  originalFilename: blogData.blogImage.originalFilename,
                },
                height: 60,
                width: 60,
              }}
            />
          </ProfileImageWrapper>
          <div>
            <Row>
              <Paragraph style={{ fontWeight: "bold" }} text="Author name" />
              <SocialIconsWrapper>
                <IconWrapper>
                  <Link {...{ path: { current: "https://facebook.com" } }}>
                    <SiFacebook />
                  </Link>
                </IconWrapper>
                <IconWrapper>
                  <Link path={{ current: "https://instagram.com" }}>
                    <SiInstagram />
                  </Link>
                </IconWrapper>
                <IconWrapper>
                  <Link path={{ current: "https://linkedin.com" }}>
                    <SiLinkedin />
                  </Link>
                </IconWrapper>
              </SocialIconsWrapper>
            </Row>
            <Caption text={format(blogData._createdAt, "do 'de' MMMM yyyy")} />
          </div>
        </Row>
      </AuthorWrapper>
    </Container>
  );
};
