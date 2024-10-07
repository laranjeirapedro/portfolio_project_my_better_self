import React from "react";
import { useRouter } from "next/router";
import * as Styled from "./Footer.desktop.styles";
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
import { colors, spacing, fontSize } from "@app/styles";

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
    <Styled.FooterContainer>
      <Styled.ContentContainer>
        <Styled.RowContainer>
          <Styled.LogoContainer>
            <Image
              data={{
                image: { ...logo.asset },
                width: 130,
                height: 60,
              }}
              objectFit="contain"
            />
          </Styled.LogoContainer>
          <Styled.MidContainer>
            <Paragraph text={shortDescription} />
          </Styled.MidContainer>
          <Styled.RightContainer>
            <div>
              {links.length > 0 && (
                <Styled.LinksContainer>
                  {links.map((link, index) => (
                    <React.Fragment key={`${link.path.current}-${index}`}>
                      {index !== 0 && <Spacer width={spacing.s} />}
                      <Link {...link} />
                    </React.Fragment>
                  ))}
                </Styled.LinksContainer>
              )}
              <Styled.SocialIconsWrapper>
                {socialIcons.map(
                  (icon) =>
                    iconsMap[icon.icon.name] && (
                      <Styled.IconWrapper key={icon.url}>
                        <Link {...{ path: { current: icon.url } }}>
                          {iconsMap[icon.icon.name]?.({
                            size: fontSize.m,
                            color: colors.primary["700"],
                          })}
                        </Link>
                      </Styled.IconWrapper>
                    ),
                )}
              </Styled.SocialIconsWrapper>
            </div>
          </Styled.RightContainer>
        </Styled.RowContainer>
        <Styled.CopyrightContainer>
          <Caption text={siteCopyright} />
        </Styled.CopyrightContainer>
      </Styled.ContentContainer>
    </Styled.FooterContainer>
  );
};
