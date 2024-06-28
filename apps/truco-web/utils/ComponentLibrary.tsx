import React from "react";
import { Link, Caption, Heading, Paragraph, SubHeading } from "@app/components";
import { ComponentTypes } from "@app/types";

type ComponentLibraryProps = {
  content: Array<any>;
};

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
