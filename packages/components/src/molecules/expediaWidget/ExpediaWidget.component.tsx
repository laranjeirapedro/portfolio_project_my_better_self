"use client";

import React, { useEffect } from "react";
import { EG_CLASS_NAMES, EG_URL_NAMES } from "./ExpediaWidget.constants";

// Add this interface at the top of the file, before the component
declare global {
  interface Window {
    eg: {
      widgets: any;
    };
  }
}

type ExpediaWidgetProps = {
  widgetData: {
    className: string;
    widget: string;
    program?: string;
    lobs?: string;
    network?: string;
    camref?: string;
    layout?: string;
    imageType?: string;
    message?: string;
    link?: string;
  };
};

export const ExpediaWidget = ({ widgetData }: ExpediaWidgetProps) => {
  const {
    className,
    widget,
    program,
    lobs,
    network,
    camref,
    layout,
    imageType,
    message,
    link,
  } = widgetData;

  useEffect(() => {
    // Choose URL based on className (Banner or Search)
    const scriptUrl =
      className === EG_CLASS_NAMES.EG_AFFILIATE_BANNERS
        ? EG_URL_NAMES.EG_AFFILIATE_BANNER_URL
        : EG_URL_NAMES.EG_AFFILIATE_SEARCH_URL;

    // Remove previous script
    const previousScript = document.querySelector(
      className === EG_CLASS_NAMES.EG_WIDGET
        ? EG_CLASS_NAMES.EG_WIDGETS_SCRIPT
        : EG_CLASS_NAMES.EG_AFFILIATE_BANNERS_SCRIPT
    );
    if (previousScript) {
      document.body.removeChild(previousScript);
    }

    // Add correct script
    const script = document.createElement("script");
    script.src = scriptUrl;
    const scriptClassName =
      className === EG_CLASS_NAMES.EG_WIDGET
        ? EG_CLASS_NAMES.EG_WIDGETS_SCRIPT
        : EG_CLASS_NAMES.EG_AFFILIATE_BANNERS_SCRIPT;
    script.className = scriptClassName;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (typeof window.eg !== "undefined" && window.eg.widgets) {
        const event = new Event("DOMContentLoaded");
        window.dispatchEvent(event);
      }
    };

    script.onerror = () => console.error("Error loading script.");

    return () => {
      // Remove script on update of className
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [className]); // update if className change

  return (
    <div
      className={className}
      data-widget={widget}
      data-program={program}
      data-lobs={lobs}
      data-network={network}
      data-camref={camref}
      data-layout={layout}
      data-image={imageType}
      data-message={message}
      data-link={link}
    ></div>
  );
};
