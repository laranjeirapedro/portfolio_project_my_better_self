import React from "react";
import { Link, Caption, Heading, Paragraph, SubHeading } from "@app/components";

type ComponentLibraryProps = {
  content: Array<any>;
};

export enum ComponentTypes {
  LINK = "link",
  HEADING = "heading",
  CAPTION = "caption",
  SUB_HEADING = "subHeading",
  PARAGRAPH = "paragraph",
}

const getComponentByType = (component: any): JSX.Element | null => {
  switch (component._type) {
    case ComponentTypes.LINK:
      return <Link {...component} />;
    case ComponentTypes.HEADING:
      return <Heading {...component} />;
    case ComponentTypes.CAPTION:
      return <Caption {...component} />;
    case ComponentTypes.SUB_HEADING:
      return <SubHeading {...component} />;
    case ComponentTypes.PARAGRAPH:
      return <Paragraph {...component} />;
    default:
      return null;
  }
};

export const ComponentLibrary = ({ content }: ComponentLibraryProps) => {
  return content?.map((component, index) => (
    <React.Fragment key={`component-${index}`}>
      {getComponentByType(component)}
    </React.Fragment>
  ));
};
