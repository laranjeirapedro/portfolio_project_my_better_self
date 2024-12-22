import { Footer, FooterProps, Header } from '@app/components';
import {
  SanityClientProvider,
  SettingsProvider,
  useGetSettings,
  ProductsProvider,
} from '@app/hooks';
import AuthGuard from '@components/authGuard/AuthGuard.component';
import { useAuth } from '@hooks/useAuth';
import '@src/styles/global.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { ParallaxProvider } from 'react-scroll-parallax';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_ANALYTICS_GA4 ?? '';

if (typeof window !== 'undefined') {
  // checks that we are client-side
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? '', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
    person_profiles: 'always', // or 'identified_only' to create profiles for auth users as well
    autocapture: false,
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug(); // debug mode in development
    },
  });
}

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  const [siteData, setSiteData] = useState<any>();
  const { data: settingsData, isSuccess } = useGetSettings();

  const router = useRouter();

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (settingsData && isSuccess) {
      setSiteData(settingsData);
    }
  }, [settingsData]);

  useEffect(() => {
    ReactGA.initialize(GA_TRACKING_ID);

    const handleRouteChange = (url: string) => {
      ReactGA.send({ hitType: 'pageview', page: url });
      posthog.capture('$pageview');
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Clean up the event listener when the component unmounts
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  if (!siteData) return null;

  return (
    <AuthGuard
      authSwitch={siteData.header.authSwitch}
      marketplaceSwitch={siteData.header.marketplaceSwitch}
    >
      <ProductsProvider keywords={siteData.amazonKeywords} productIDs={siteData.amazonProductIDs}>
        <Head>
          {Boolean(siteData.header.favicon.asset.url) && (
            <>
              <link rel="icon" href={siteData.header.favicon.asset.url} type="image/png" />
              <link rel="apple-touch-icon" href={siteData.header.favicon.asset.url} />
              <link rel="icon" href={siteData.header.favicon.asset.url} type="image/x-icon" />
              <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
              />
            </>
          )}

          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <PostHogProvider client={posthog}>
          <SanityClientProvider>
            <ParallaxProvider>
              <SettingsProvider data={siteData.settings}>
                <Header {...siteData.header} isAuth={isAuthenticated} />
                <Component {...pageProps} {...siteData} />
                <Footer {...(siteData.footer as FooterProps)} />
              </SettingsProvider>
            </ParallaxProvider>
          </SanityClientProvider>
        </PostHogProvider>
      </ProductsProvider>
    </AuthGuard>
  );
};

export default ({ Component, pageProps, ...props }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <App {...{ Component, pageProps, ...props }} />
    </QueryClientProvider>
  );
};
