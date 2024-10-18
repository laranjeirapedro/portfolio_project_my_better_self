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
import { ParallaxProvider } from "react-scroll-parallax";

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
          <>
            <link
              rel="icon"
              href={siteData.header.favicon.asset.url}
              type="image/png"
            />
            <link
              rel="apple-touch-icon"
              href={siteData.header.favicon.asset.url}
            />
            <link
              rel="icon"
              href={siteData.header.favicon.asset.url}
              type="image/x-icon"
            />
          </>
        )}

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <SanityClientProvider>
        <ParallaxProvider>
          <SettingsProvider data={siteData.settings}>
            <Header {...siteData.header} isAuth={isAuthenticated} />
            <ContentWrapper>
              <Component {...pageProps} {...siteData} />
            </ContentWrapper>
            <Footer {...(siteData.footer as FooterProps)} />
          </SettingsProvider>
        </ParallaxProvider>
      </SanityClientProvider>
    </AuthGuard>
  );
};

export default App;
