import styled from "styled-components";
import NextLink from "next/link";

export type LinkProps = {
  linkText: string;
  path: string;
};

const _Link = styled(NextLink)({
  fontSize: "14px",
});

export const Link = ({ linkText, path }: LinkProps) => {
  return <_Link href={path}>{linkText}</_Link>;
};
