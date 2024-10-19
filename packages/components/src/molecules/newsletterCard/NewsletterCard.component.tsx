import React, { useCallback, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import * as Styled from "./NewsletterCard.styles";
import { Image, Spacer, Button } from "../../atoms";
import NewsletterImage from "./assets/newsletter.jpg";
import { ButtonTypes } from "../../atoms/button/Button.types";

export type NewsletterCardProps = {
  title?: string;
  description?: string;
  image?: { url: string };
};

export const NewsletterCard = ({
  title,
  description,
  image,
}: NewsletterCardProps) => {
  const [email, setEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const onEmailChanged = useCallback(
    (e: any) => {
      setEmail(e.target.value);
    },
    [setEmail],
  );
  const getButtonLabel = useCallback(
    (status: "error" | "success" | "sending" | null) => {
      switch (status) {
        case "sending":
          return "Sending...";
        case "success":
          return "Subscribed!";
        default:
          return "Subscribe";
      }
    },
    [],
  );
  return (
    <MailchimpSubscribe
      url={process.env.NEXT_PUBLIC_MAILCHIMP_NEWSLETTER_FORM_URL ?? ""}
      render={({ subscribe, status, message }) => {
        const errorMessage =
          status == "error" ? "Please provide a valid email." : undefined;
        if (isButtonDisabled && errorMessage) {
          setIsButtonDisabled(false);
        }
        return (
          <Styled.Form>
            <Styled.TextContainer>
              <Styled.Title text={title ?? "Stay Up to Date!"} />
              <Styled.Description
                text={
                  description ??
                  "Subscribe to recieve our articles and other information on this topic. You can unsubscribe anytime!"
                }
              />
              <Spacer height={12} />
              <Styled.TextInputTitle text="Email" />
              <Styled.StyledTextInput
                type="email"
                value={email}
                handleChange={onEmailChanged as never}
                error={errorMessage}
              />
              <Button
                disabled={isButtonDisabled}
                label={getButtonLabel(status)}
                onClick={() => {
                  setIsButtonDisabled(true);
                  subscribe({ EMAIL: email });
                }}
                buttonType={ButtonTypes.TERTIARY}
              />
            </Styled.TextContainer>
            <Styled.ImageContainer>
              <Image
                data={{
                  image: {
                    url: image?.url ? image?.url + "?w=300" : NewsletterImage,
                    originalFilename: "Newsletter Image",
                  },
                  height: "100%",
                  borderRadius: "0px 8px 8px 0px",
                }}
              />
            </Styled.ImageContainer>
          </Styled.Form>
        );
      }}
    />
  );
};
