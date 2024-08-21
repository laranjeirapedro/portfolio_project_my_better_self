import { Block, Section } from "../../organisms";
import * as Styled from "./BlogFeedLayout.styles";

export const BlogFeedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Section>
      <Styled.Container>
        <Styled.MainContainer>{children}</Styled.MainContainer>
        <Styled.SideContainer>other posts</Styled.SideContainer>
      </Styled.Container>
    </Section>
  );
};
