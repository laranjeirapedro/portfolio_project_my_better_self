import ReactGA from "react-ga4";

export const buttonClickedAnalytics = ({
  label,
  path,
}: {
  label?: string;
  path?: string;
} = {}) => {
  ReactGA.event(
    {
      category: "User",
      action: "Button Clicked",
      ...(label && { label }),
    },
    {
      ...(path && { path }),
    },
  );
};
