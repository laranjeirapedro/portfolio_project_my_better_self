import React, { useMemo } from "react";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { Card } from "../../molecules";
import { Button, Image } from "../../atoms";
import { ButtonProps } from "../../atoms/button/Button.types";
// import Image from "next/image";

export const Block = ({ content }: any) => {
  const myPortableTextComponents = useMemo(
    () =>
      ({
        marks: {},
        block: {},
        list: {},
        listItem: {},
        types: {
          // TODO: replace types with image type props when vailable
          image: ({ value }: any) => <Image data={value} />,
          images: ({ value }: any) => <Image data={value} />,

          // TODO: replace types with card type props when vailable
          card: ({ value }: any) => <Card data={value} />,
          button: ({ value }: { value: ButtonProps }) => <Button {...value} />,
        },
        //   marks: {
        //     link: ({ children, value }) => {
        //       const rel = !value.href.startsWith("/")
        //         ? "noreferrer noopener"
        //         : undefined;
        //       return (
        //         <a href={value.href} rel={rel}>
        //           {children}
        //         </a>
        //       );
        //     },
        //   },
      }) as unknown as PortableTextReactComponents,
    []
  );

  return <PortableText value={content} components={myPortableTextComponents} />;
};
