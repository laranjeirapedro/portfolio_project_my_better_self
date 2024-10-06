import { useMemo } from "react";
import { HeaderProps } from "./Header.types";
import { HeaderTypeA } from "./typeA";
import React from "react";
import { HeaderTypeB } from "./typeB";

export const Header = (data: HeaderProps) => {
  const { headerType } = useMemo(() => data, [data]);

  switch (headerType) {
    case "typeA":
      return <HeaderTypeA {...data} />;
    case "typeB":
      return <HeaderTypeB {...data} />;
    default:
      return <HeaderTypeA {...data} />;
  }
};
