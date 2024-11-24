import { AllowedEvents, EVENT_NAMES, EventProperties } from "@app/types";
import posthog from "posthog-js";

type TrackEventProps<T extends AllowedEvents> = {
  eventName: EVENT_NAMES;
  eventProperties: EventProperties<T>;
};

export const trackEvent = <T extends AllowedEvents>({
  eventName,
  eventProperties,
}: TrackEventProps<T>) => posthog.capture(eventName, eventProperties);
