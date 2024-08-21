import * as Styled from "./PostFeedLayout.styles";
import { Block, Section } from "../../organisms";

export const PostFeedLayout = ({ children }: any) => {
  return (
    <Section>
      <Styled.Container>
        <Styled.SideContainer>ads</Styled.SideContainer>
        <Styled.MainContainer>{children}</Styled.MainContainer>
        <Styled.SideContainer>other posts</Styled.SideContainer>
      </Styled.Container>
    </Section>
  );
};
