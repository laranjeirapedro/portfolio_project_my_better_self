import { Block } from "../../organisms";
import * as Styled from "./BlogFeedLayout.styles";

export const BlogFeedLayout = ({ data }: any) => {
  return (
    <Styled.Container>
      <Styled.MainContainer>
        <Block content={data.mainContent} />
      </Styled.MainContainer>
      <Styled.SideContainer>
        <Block content={data.rightContent} />
      </Styled.SideContainer>
    </Styled.Container>
  );
};
