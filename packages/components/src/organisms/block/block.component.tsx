import { useMemo } from "react";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { Card, LatestBlogBanner } from "../../molecules";
import { Button, Image, Link } from "../../atoms";
import { ButtonProps } from "../../atoms/button/Button.types";

export const Block = ({ content }: any) => {
  const myPortableTextComponents = useMemo(
    () =>
      ({
        block: {},
        list: {},
        listItem: {},
        types: {
          // TODO: replace types with image type props when vailable
          image: ({ value }: any) => <Image data={value} />,
          images: ({ value }: any) => <Image data={value} />,

          // TODO: replace types with card type props when vailable
          card: ({ value }: any) => <Card data={value} />,
          latestBlogBanner: () => <LatestBlogBanner />,
          button: ({ value }: { value: ButtonProps }) => <Button {...value} />,
        },
        marks: {
          link: ({
            children,
            value,
          }: {
            children: string[];
            value: { href: string; url: string };
          }) => {
            return (
              <Link
                {...value}
                path={{ current: value.href ?? value.url }}
                linkText={children.toString()}
              />
            );
          },
          rightTextAlign: ({ children }: { children: string[] }) => {
            return <div style={{ textAlign: "right" }}>{children}</div>;
          },
          leftTextAlign: ({ children }: { children: string[] }) => {
            return <div style={{ textAlign: "left" }}>{children}</div>;
          },
          centerTextAlign: ({ children }: { children: string[] }) => {
            return <div style={{ textAlign: "center" }}>{children}</div>;
          },
        },
      }) as unknown as PortableTextReactComponents,
    [],
  );

  return <PortableText value={content} components={myPortableTextComponents} />;
};
