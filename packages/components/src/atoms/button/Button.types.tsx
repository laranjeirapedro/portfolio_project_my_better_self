export const enum ButtonTypes {
  // default
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  TERTIARY = "TERTIARY",
}

export type ButtonProps = {
  label: string;
  url?: { current: string };
  onClick: () => void;
  buttonType?: ButtonTypes;
};
