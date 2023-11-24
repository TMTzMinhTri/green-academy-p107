import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import SettingProvider from '@/contexts/settings';
import ThemeProvider from '@/contexts/theme';
import createEmotionCache from '@/libs/createEmotionCache';
import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { HydrationBoundary, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import NProgress from 'nprogress';

import 'nprogress/nprogress.css';
import '@/styles/global.css';

import { queryClient } from '@/libs/reactQuery';

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPage;
}

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <SettingProvider>
            <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
            <ReactQueryDevtools />
          </SettingProvider>
        </CacheProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
