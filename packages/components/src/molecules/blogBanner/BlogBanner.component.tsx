import React from "react";
import { Caption, Image, Link, Paragraph, Spacer } from "../..";
import NextImage from "next/image";
import * as Styled from "./BlogBanner.styles";
import { BlogProps } from "../../../../types/src/models/blog";
import { format } from "date-fns";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { colors, fontSize, spacing } from "@app/styles";

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

  const iconsMap: Record<string, IconType> = {
    logo_linkedin: SiLinkedin,
    logo_facebook: SiFacebook,
    logo_instagram: SiInstagram,
  };

  return (
    <>
      <Styled.Container {...(isClickable && { onClick, isClickable })}>
        <Styled.BackgroundImageContainer id="background">
          <NextImage
            src={blogData.blogImage.url}
            alt={blogData.blogImage.originalFilename}
            fill
            priority
            objectFit="cover"
          />
        </Styled.BackgroundImageContainer>
        <Styled.ContentWraper>
          <Styled.BannerHeading text={blogData.title} />
          <Spacer height={spacing.xxxs} />
          <Styled.BannerParagraph
            color={colors.offWhite["050"]}
            text={blogData.shortDescription}
          />
        </Styled.ContentWraper>
      </Styled.Container>
      {blogData.author && !isClickable && (
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
    </>
  );
};
