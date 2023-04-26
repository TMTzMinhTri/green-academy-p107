import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import NProgress from "nprogress";

import createEmotionCache from "@/libs/createEmotionCache";
import "nprogress/nprogress.css";
import { Router } from "next/router";
import SettingProvider from "@/contexts/settings";
import ThemeProvider from "@/contexts/theme";

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
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

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SettingProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </SettingProvider>
    </CacheProvider>
  );
}
