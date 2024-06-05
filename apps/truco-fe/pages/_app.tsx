import "../src/styles/global.css";
import { Header, HeaderProps } from "@app/components";
import {
  SanityClientProvider,
  SettingsProvider,
  useGetSettings,
} from "@app/hooks";

import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  const [siteData, setSiteData] = useState<any>();
  const settingsData = useGetSettings();

  useEffect(() => {
    if (!siteData) {
      const getSettings = async () => {
        Promise.resolve(settingsData).then((data) => {
          if (data) {
            console.log(data);
            setSiteData({ ...data });
          }
        });
      };

      getSettings();
    }
  }, [settingsData]);

  if (!siteData) return null;

  return (
    <SanityClientProvider>
      <SettingsProvider data={siteData.settings}>
        <Header {...(siteData.header as HeaderProps)} />
        <Component {...pageProps} />
        <h1>Footer</h1>
      </SettingsProvider>
    </SanityClientProvider>
  );
};

export default App;
