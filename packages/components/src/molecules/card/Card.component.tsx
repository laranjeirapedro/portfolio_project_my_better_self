import React from "react";
import { Block } from "../../organisms";
import { CardWrapper } from "./Card.styles";

export const Card = ({ data }: any) => {
  return (
    <CardWrapper>
      <Block content={data.content} />
    </CardWrapper>
  );
};
