import * as Styled from "./PostFeedLayout.styles";
import { Block } from "../../organisms";

export const PostFeedLayout = ({ data }: any) => {
  return (
    <Styled.Container>
      <Styled.SideContainer>
        <Block content={data.leftContent} />
      </Styled.SideContainer>
      <Styled.MainContainer>
        <Block content={data.mainContent} />
      </Styled.MainContainer>
      <Styled.SideContainer>
        <Block content={data.rightContent} />
      </Styled.SideContainer>
    </Styled.Container>
  );
};
