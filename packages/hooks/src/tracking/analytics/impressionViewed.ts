import ReactGA from "react-ga4";

export const impressionViewedAnalytics = ({
  label,
  origin,
}: {
  label?: string;
  origin: string;
}) => {
  ReactGA.event(
    {
      category: "Engagement",
      action: "Impression Viewed",
      ...(label && { label }),
    },
    {
      origin,
    }
  );
};
