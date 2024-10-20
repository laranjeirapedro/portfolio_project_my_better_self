import ReactGA from "react-ga4";

export const amazonProductClickedAnalytics = ({
  label,
  path,
  origin,
  title,
}: {
  label?: string;
  origin: string;
  path: string;
  title: string;
}) => {
  ReactGA.event(
    {
      category: "User",
      action: "Amazon Product Clicked",
      ...(label && { label }),
    },
    {
      path,
      origin,
      title,
    },
  );
};
