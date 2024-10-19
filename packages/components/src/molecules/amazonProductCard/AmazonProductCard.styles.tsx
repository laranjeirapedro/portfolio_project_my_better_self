import { breakpoints, colors, fontSize, spacing } from "@app/styles";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { SubHeading } from "../../atoms";

const OriginalPriceStyle = css`
  font-size: ${fontSize.l * 0.6}px;
  color: ${colors.darkGrey[300]};
  @media (max-width: ${breakpoints.tablet}px) {
    font-size: ${fontSize.l * 0.7}px;
  }
`;

export const CardContainer = styled.div`
  max-width: 950px;
  width: 100%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${spacing.m}px auto;
  padding: ${spacing.m}px;
  box-sizing: border-box;
  border: 1px solid #d5d9d9;
  background-color: ${colors.offWhite["050"]};
`;
export const CardWrapper = styled.div`
  margin: auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;

  @media (max-width: ${breakpoints.mobile}px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  width: 40%;
  height: 200px;
  display: flex;

  @media (max-width: ${breakpoints.mobile}px) {
    width: 100%;
    flex: 1;
    margin-bottom: ${spacing.s}px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  justify-content: center;

  @media (max-width: ${breakpoints.mobile}px) {
    gap: ${spacing.xxxs}px;
  }
`;

export const RatingWrapper = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: row;
`;

export const RatingIcon = styled.div`
  width: 20px;
  height: 20px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OriginalPriceText = styled(SubHeading)`
  ${OriginalPriceStyle}
  margin-left: ${spacing.xxs}px;
  text-align: right;
`;

export const OriginalPrice = styled(SubHeading)`
  ${OriginalPriceStyle}
  margin-left: ${spacing.xxxs}px;
  text-decoration: line-through;
`;

export const PriceSup = styled(SubHeading)`
  font-size: ${fontSize.l * 0.6}px;
  margin-bottom: 0.4rem;
  margin: 0;

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: ${fontSize.l * 0.6}px;
    margin-bottom: 0.4rem;
    margin: 0;
  }
`;

export const AmazonButton = styled.div`
  background-color: #ffd814;
  width: 100px;
  border-radius: ${34}px;
  height: ${fontSize.m}px;
  border: 1px solid #ffd814;
  cursor: pointer;
  padding: ${spacing.xxs}px;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 5px 0 #d5d9d980;

  span {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${fontSize.m}px;
    line-height: ${fontSize.m}px;
  }
`;
