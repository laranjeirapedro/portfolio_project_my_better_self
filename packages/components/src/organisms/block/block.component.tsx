import { useMemo } from "react";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { BlogList, Card, LatestBlogBanner } from "../../molecules";
import {
  Button,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Paragraph,
  SubHeading,
} from "../../atoms";
import { ButtonProps } from "../../atoms/button/Button.types";
import { spacing } from "@app/styles";

const ComponentWrapper = (children: React.ReactNode) => {
  return <div style={{ margin: `0px ${spacing.m}px` }}>{children}</div>;
};

export const Block = ({ content }: any) => {
  const myPortableTextComponents = useMemo(
    () =>
      ({
        block: {
          normal: ({ children }: { children: string[] }) => {
            return ComponentWrapper(<Paragraph text={children} />);
          },
          h1: ({ children }: { children: string[] }) => {
            return ComponentWrapper(<Heading text={children} />);
          },
          h2: ({ children }: { children: string[] }) => {
            return ComponentWrapper(<SubHeading text={children} />);
          },
        },
        list: {
          bullet: ({ children }: { children: string[] }) =>
            ComponentWrapper(<List>{children}</List>),
          number: ({ children }: { children: string[] }) =>
            ComponentWrapper(<List ordered>{children}</List>),
        },
        listItem: {
          bullet: ({ children }: { children: string[] }) => (
            <ListItem type="disc">{children}</ListItem>
          ), // Define the bullet list item
          number: ({ children }: { children: string[] }) => (
            <ListItem type="number">{children}</ListItem>
          ), // Define the numbered list item
        },
        types: {
          // TODO: replace types with image type props when vailable
          image: ({ value }: any) => ComponentWrapper(<Image data={value} />),
          images: ({ value }: any) => ComponentWrapper(<Image data={value} />),

          // TODO: replace types with card type props when vailable
          card: ({ value }: any) => <Card data={value} />,
          latestBlogBanner: () => <LatestBlogBanner />,
          blogList: () => <BlogList />,
          button: ({ value }: { value: ButtonProps }) =>
            ComponentWrapper(<Button {...value} />),
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
    []
  );

  return (
    <PortableText
      value={content}
      components={myPortableTextComponents}
      onMissingComponent={() => <></>}
    />
  );
};
