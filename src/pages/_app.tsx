import React from "react";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Router } from "next/router";
import NProgress from "nprogress";

import SettingProvider from "@/contexts/settings";
import ThemeProvider from "@/contexts/theme";
import createEmotionCache from "@/libs/createEmotionCache";

import "nprogress/nprogress.css";
import "@/styles/global.css";
import { queryClient } from "@/libs/reactQuery";

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPage;
}

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

const fetcher = async (resource: string, init: any) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/${resource}`,
    init
  );
  if (!response.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return response.json();
};

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  // const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <SettingProvider>
            <ReactQueryDevtools />
            <ThemeProvider>
              {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
          </SettingProvider>
        </CacheProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
