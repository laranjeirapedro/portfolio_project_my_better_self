import {
  SanityClientProvider,
  SettingsProvider,
  useGetSettings,
} from "@app/hooks";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  const [settings, setSettings] = useState<any>();
  const settingsData = useGetSettings();

  useEffect(() => {
    if (!settings) {
      const getSettings = async () => {
        Promise.resolve(settingsData).then((data) => {
          data && setSettings({ ...data });
        });
      };

      getSettings();
    }
  }, [settingsData]);

  if (!settings) return null;

  return (
    <SanityClientProvider>
      <SettingsProvider data={settings}>
        <h1>Header</h1>
        <Component {...pageProps} />
        <h1>Footer</h1>
      </SettingsProvider>
    </SanityClientProvider>
  );
};

export default App;
