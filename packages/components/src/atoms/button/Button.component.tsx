import React, { createElement, useCallback } from "react";
import { StyledButton } from "./Button.styles";
import { ButtonProps, ButtonTypes } from "./Button.types";
import { useRouter } from "next/router";

export const Button = (data: ButtonProps) => {
  const { label, buttonType: type = ButtonTypes.PRIMARY, onClick, url } = data;
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    if (onClick) {
      onClick();
    } else {
      router.push(url?.current ?? "");
    }
  }, []);

  return createElement(
    StyledButton[type],
    { onClick: onButtonClick },
    label?.toUpperCase()
  );
};
