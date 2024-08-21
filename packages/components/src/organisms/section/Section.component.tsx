import React from "react";
import styled from "@emotion/styled";
import { spacing } from "@app/styles";

type SectionProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
};

const SectionWrapper = styled.div<{ fullWidth?: boolean }>(({ fullWidth }) => ({
  paddingLeft: fullWidth ? 0 : spacing.s,
  paddingRight: fullWidth ? 0 : spacing.s,
}));

export const Section = ({ children, fullWidth }: SectionProps) => {
  return <SectionWrapper fullWidth={fullWidth}>{children}</SectionWrapper>;
};
