import "../src/styles/global.css";
import { Footer, FooterProps, Header } from "@app/components";
import {
  SanityClientProvider,
  SettingsProvider,
  useGetSettings,
} from "@app/hooks";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { ContentWrapper } from "../components";
import AuthGuard from "../components/authGuard/AuthGuard.component";
import { useAuth } from "../hooks/useAuth";

const App = ({ Component, pageProps }: AppProps) => {
  const [siteData, setSiteData] = useState<any>();
  const settingsData = useGetSettings();

  const { isAuthenticated } = useAuth();

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
    <AuthGuard authSwitch={siteData.header.authSwitch}>
      <Head>
        {Boolean(siteData.header.favicon.asset.url) && (
          <link rel="icon" href={siteData.header.favicon.asset.url} />
        )}
        <meta
          name="google-adsense-account"
          content="ca-pub-8361311161311634"
        ></meta>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8361311161311634"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <SanityClientProvider>
        <SettingsProvider data={siteData.settings}>
          <Header {...siteData.header} isAuth={isAuthenticated} />
          <ContentWrapper>
            <Component {...pageProps} {...siteData} />
          </ContentWrapper>
          <Footer {...(siteData.footer as FooterProps)} />
        </SettingsProvider>
      </SanityClientProvider>
    </AuthGuard>
  );
};

export default App;
