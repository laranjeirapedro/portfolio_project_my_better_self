import React from "react";
import { Button, Heading, Paragraph, Spacer } from "@app/components";
import { logout } from "@utils/firebaseConfig";
import { ContentWrapper } from "@components";
import { colors, spacing } from "@app/styles";
import styled from "@emotion/styled";

const Dashboard = () => {
  return (
    <ContentWrapper>
      <Container>
        <Heading text="Dashboard" textAlign="center" />
        <Spacer height={spacing.s} />
        <Paragraph text="Under Development" textAlign="center" />
        <Spacer height={spacing.s} />
        <Button
          label="Logout"
          onClick={() => {
            logout();
          }}
        />
      </Container>
    </ContentWrapper>
  );
};

export default Dashboard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  width: 900px;
  height: 500px;
  padding: ${spacing.s}px;
  max-width: calc(100% - ${spacing.s} * 4) px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px ${colors.darkGrey[100]};
`;
