import { useEffect, useState } from "react";
import { Caption, Heading, Image, Link, Paragraph } from "../../atoms";
import * as Styled from "./LatestBlogBanner.styles";
import { useGetLatestBlog } from "@app/hooks";
import { BlogProps } from "../../../../types/src/models/blog";
import { format } from "date-fns";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { useRouter } from "next/navigation";

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
    <Styled.Container>
      <Styled.BlogWrapper onClick={onClick}>
        <Styled.ContentWraper>
          <Heading text={blogData.title} />
          <Paragraph text={blogData.shortDescription} />
        </Styled.ContentWraper>
        <Styled.ImageWrapper>
          <Image
            data={{
              image: {
                url: blogData.blogImage.url,
                originalFilename: blogData.blogImage.originalFilename,
              },
              height: 300,
            }}
          />
        </Styled.ImageWrapper>
      </Styled.BlogWrapper>
      <Styled.AuthorWrapper>
        <Styled.Row>
          <Styled.ProfileImageWrapper>
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
          </Styled.ProfileImageWrapper>
          <div>
            <Styled.Row>
              <Paragraph style={{ fontWeight: "bold" }} text="Author name" />
              <Styled.SocialIconsWrapper>
                <Styled.IconWrapper>
                  <Link {...{ path: { current: "https://facebook.com" } }}>
                    <SiFacebook />
                  </Link>
                </Styled.IconWrapper>
                <Styled.IconWrapper>
                  <Link path={{ current: "https://instagram.com" }}>
                    <SiInstagram />
                  </Link>
                </Styled.IconWrapper>
                <Styled.IconWrapper>
                  <Link path={{ current: "https://linkedin.com" }}>
                    <SiLinkedin />
                  </Link>
                </Styled.IconWrapper>
              </Styled.SocialIconsWrapper>
            </Styled.Row>
            <Caption text={format(blogData._createdAt, "do 'de' MMMM yyyy")} />
          </div>
        </Styled.Row>
      </Styled.AuthorWrapper>
    </Styled.Container>
  );
};
