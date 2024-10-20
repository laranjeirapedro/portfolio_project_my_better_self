import ReactGA from "react-ga4";

export const linkClickedAnalytics = ({
  label,
  path,
}: {
  label?: string;
  path: string;
}) => {
  ReactGA.event(
    {
      category: "Navigation",
      action: "Link Clicked",
      ...(label && { label }),
    },
    {
      path,
    },
  );
};
