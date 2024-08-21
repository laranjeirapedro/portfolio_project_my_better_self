import React from "react";
import { Caption, Heading, Image, Link, Paragraph, Section } from "../..";
import * as Styled from "./BlogBanner.styles";
import { BlogProps } from "../../../../types/src/models/blog";
import { format } from "date-fns";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { fontSize } from "@app/styles";

type BlogBannerProps = {
  blogData: BlogProps;
  isClickable?: boolean;
};

export const BlogBanner = ({ blogData, isClickable }: BlogBannerProps) => {
  const router = useRouter();

  if (!blogData) return null;

  const onClick = () => {
    router.push(`/blog/${blogData.slug.current}`);
  };

  console.log(blogData.author);

  const iconsMap: Record<string, IconType> = {
    logo_linkedin: SiLinkedin,
    logo_facebook: SiFacebook,
    logo_instagram: SiInstagram,
  };

  return (
    <Section>
      <Styled.Container>
        <Styled.BlogWrapper {...(isClickable && { onClick, isClickable })}>
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
        {blogData.author && (
          <Styled.AuthorWrapper>
            <Styled.Row>
              {blogData.author.profilePicture && (
                <Styled.ProfileImageWrapper>
                  <Image
                    data={{
                      image: {
                        url: blogData.author.profilePicture.url,
                        originalFilename:
                          blogData.author.profilePicture.originalFilename,
                      },
                      height: 60,
                      width: 60,
                    }}
                  />
                </Styled.ProfileImageWrapper>
              )}
              <div>
                <Styled.Row>
                  <Paragraph
                    style={{ fontWeight: "bold" }}
                    text={blogData.author.fullName}
                  />
                  <Styled.SocialIconsWrapper>
                    {blogData.author.socialIcons.map(
                      (icon) =>
                        iconsMap[icon.icon.name] && (
                          <Styled.IconWrapper key={icon.url}>
                            <Link {...{ path: { current: icon.url } }}>
                              {iconsMap[icon.icon.name]?.({ size: fontSize.m })}
                            </Link>
                          </Styled.IconWrapper>
                        )
                    )}
                  </Styled.SocialIconsWrapper>
                </Styled.Row>
                <Caption
                  text={format(blogData._createdAt, "do 'de' MMMM yyyy")}
                />
              </div>
            </Styled.Row>
          </Styled.AuthorWrapper>
        )}
      </Styled.Container>
    </Section>
  );
};
