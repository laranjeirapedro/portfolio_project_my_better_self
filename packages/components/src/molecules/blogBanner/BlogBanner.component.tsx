import { linkClickedAnalytics } from "@app/hooks";
import { colors, fontSize, spacing } from "@app/styles";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { Caption, Image, Link, Paragraph, Spacer } from "../..";
import { BlogProps } from "../../../../types/src/models/blog";
import * as Styled from "./BlogBanner.styles";

type BlogBannerProps = {
  blogData?: BlogProps;
  isClickable?: boolean;
};

const BANNER_HEIGHT = 300;

export const BlogBanner = ({ blogData, isClickable }: BlogBannerProps) => {
  const router = useRouter();

  const onClick = () => {
    linkClickedAnalytics({ path: `/blog/${blogData?.slug.current}` });
    router.push(`/blog/${blogData?.slug.current}`);
  };

  // Icons Map
  const iconsMap: Record<string, IconType> = {
    logo_linkedin: SiLinkedin,
    logo_facebook: SiFacebook,
    logo_instagram: SiInstagram,
  };

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Define a function to handle window resize events
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set the initial width when the component mounts
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!blogData)
    return (
      <Styled.Container bannerHeight={BANNER_HEIGHT}>
        <Styled.BackgroundImageContainer>
          <Skeleton
            borderRadius={0}
            width="100%"
            height="100%"
            baseColor={colors.darkGrey["050"]}
          />
        </Styled.BackgroundImageContainer>
      </Styled.Container>
    );

  return (
    <>
      <Styled.Container
        {...(isClickable && { onClick, isClickable })}
        bannerHeight={BANNER_HEIGHT}
      >
        <Styled.BackgroundImageContainer>
          {blogData?.blogImage?.url && (
            <ParallaxBanner
              style={{
                aspectRatio: windowWidth / BANNER_HEIGHT,
                height: "100%",
              }}
            >
              <ParallaxBannerLayer speed={-10}>
                <Image
                  data={{
                    image: {
                      url: blogData.blogImage.url,
                      originalFilename: blogData.blogImage.originalFilename,
                    },
                    height: (BANNER_HEIGHT * 3) / 2,
                  }}
                />
              </ParallaxBannerLayer>
            </ParallaxBanner>
          )}
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
                  {blogData.author.socialIcons?.map(
                    (icon) =>
                      iconsMap[icon.icon.name] && (
                        <Styled.IconWrapper key={icon.url}>
                          <Link {...{ path: { current: icon.url } }}>
                            {iconsMap[icon.icon.name]?.({ size: fontSize.m })}
                          </Link>
                        </Styled.IconWrapper>
                      ),
                  )}
                </Styled.SocialIconsWrapper>
              </Styled.Row>
              <Caption
                text={format(
                  blogData.postDate ?? blogData._createdAt,
                  "do, MMMM yyyy",
                )}
              />
            </div>
          </Styled.Row>
        </Styled.AuthorWrapper>
      )}
    </>
  );
};
