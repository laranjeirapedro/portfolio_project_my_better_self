import { createContext, useContext } from "react";

type SettingsData =
  | {
      color: {
        primaryColor: { hex: string };
        secondaryColor: { hex: string };
      };
      font: {
        [key: string]: {
          fontSize: number;
          // TODO: Get font types from packages/types
          // Blocked by: Create packages/types
          fontFamily: string;
          color: {
            hex: string;
          };
        };
      };
    }
  | undefined;

type SettingsProps = {
  children: React.ReactNode;
  data?: SettingsData;
};

const SettingsContext = createContext<SettingsData>(undefined);

export const SettingsProvider = ({ children, data }: SettingsProps) => {
  return (
    <SettingsContext.Provider value={data}>{children}</SettingsContext.Provider>
  );
};

export const useSettingsContext = () => {
  return useContext(SettingsContext);
};
