import "../src/styles/global.css";
import { Footer, Header, HeaderProps } from "@app/components";
import {
  SanityClientProvider,
  SettingsProvider,
  useGetSettings,
} from "@app/hooks";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  const [siteData, setSiteData] = useState<any>();
  const settingsData = useGetSettings();

  useEffect(() => {
    if (!siteData) {
      const getSettings = async () => {
        Promise.resolve(settingsData).then((data) => {
          if (data) {
            setSiteData({ ...data });
          }
        });
      };

      getSettings();
    }
  }, [settingsData]);

  if (!siteData) return null;

  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8361311161311634"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <SanityClientProvider>
        <SettingsProvider data={siteData.settings}>
          <Header {...(siteData.header as HeaderProps)} />
          <Component {...pageProps} {...siteData} />
          <Footer />
        </SettingsProvider>
      </SanityClientProvider>
    </>
  );
};

export default App;
