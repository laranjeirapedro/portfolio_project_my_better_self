import { breakpoints } from "@app/styles";
import styled from "@emotion/styled";

export const ProductList = styled.div`
  padding: 20px;
  width: 80%;
  @media (max-width: ${breakpoints.mobile}px) {
    width: 95%;
    margin: 0 auto;
    padding: 0px;
  }
`;

export const NoProductsContainer = styled.div`
  width: 40%;
  margin: 0 auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${breakpoints.mobile}px) {
    width: 95%;
  }
`;
