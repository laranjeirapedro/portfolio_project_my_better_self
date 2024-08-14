import React, { useMemo } from "react";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import {
  Card,
  LatestBlogBanner,
  PostFeedLayout,
  BlogFeedLayout,
} from "../../molecules";
import { Button, Image, Link } from "../../atoms";
import { ButtonProps } from "../../atoms/button/Button.types";

export const Block = ({ content }: any) => {
  console.log(content);
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
          postFeedLayout: ({ value }: any) => <PostFeedLayout data={value} />,
          blogFeedLayout: ({ value }: any) => <BlogFeedLayout data={value} />,
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
        },
      }) as unknown as PortableTextReactComponents,
    [],
  );

  return <PortableText value={content} components={myPortableTextComponents} />;
};
