import React from "react";
import { useRouter } from "next/router";
import {
  FooterContainer,
  ContentContainer,
  GridContainer,
  LogoContainer,
  MidContainer,
  RightContainer,
  LinksContainer,
  SocialIconsWrapper,
  IconWrapper,
  CopyrightContainer,
} from "./Footer.desktop.styles";
import {
  Link,
  LinkProps,
  Spacer,
  Image,
  Paragraph,
  Caption,
} from "../../atoms";
import { IconType } from "react-icons";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { colors, spacing, fontSize, imageSize } from "@app/styles";

export type FooterProps = {
  logo: any;
  shortDescription: string;
  siteCopyright: string;
  links: LinkProps[];
  socialIcons: {
    url: string;
    icon: {
      name: string;
      provider: string;
      _type: string;
    };
  }[];
};

// eslint-disable-next-line no-unused-vars
export const Footer = (data: FooterProps) => {
  const router = useRouter();

  const { logo, links, shortDescription, siteCopyright, socialIcons } = data;

  const iconsMap: Record<string, IconType> = {
    logo_facebook: SiFacebook,
    logo_instagram: SiInstagram,
  };
  return (
    <React.Fragment>
      <FooterContainer>
        <ContentContainer>
          <GridContainer>
            <LogoContainer>
              <Image
                data={{
                  image: { ...logo.asset },
                  width: imageSize.width["l"],
                  height: imageSize.height["s"],
                }}
              />
            </LogoContainer>
            <MidContainer>
              <Paragraph text={shortDescription} />
            </MidContainer>
            <RightContainer>
              <div>
                {links.length > 0 && (
                  <LinksContainer>
                    {links.map((link, index) => (
                      <React.Fragment key={`${link.path.current}-${index}`}>
                        {index !== 0 && <Spacer width={spacing.s} />}
                        <Link {...link} />
                      </React.Fragment>
                    ))}
                  </LinksContainer>
                )}
                <SocialIconsWrapper>
                  {socialIcons.map(
                    (icon) =>
                      iconsMap[icon.icon.name] && (
                        <IconWrapper key={icon.url}>
                          <Link {...{ path: { current: icon.url } }}>
                            {iconsMap[icon.icon.name]?.({
                              size: fontSize.m,
                              color: colors.primary["700"],
                            })}
                          </Link>
                        </IconWrapper>
                      ),
                  )}
                </SocialIconsWrapper>
              </div>
            </RightContainer>
          </GridContainer>
          <CopyrightContainer>
            <Caption text={siteCopyright} />
          </CopyrightContainer>
        </ContentContainer>
      </FooterContainer>
    </React.Fragment>
  );
};
