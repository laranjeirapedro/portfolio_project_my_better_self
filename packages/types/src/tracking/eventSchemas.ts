/* eslint-disable no-unused-vars */

export type ButtonEvent = {
  buttonText: string;
  callback: string;
};

export type LinkEvent = {
  linkText: string;
  target: string;
};

export type ProductEvent = {
  path: string;
  title: string;
};

export type AllowedEvents = undefined | ButtonEvent | LinkEvent | ProductEvent;

export type EventProperties<TProperties extends AllowedEvents> = {
  screenPath: string;
} & TProperties;
