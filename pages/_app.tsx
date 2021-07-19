import { PlayBar } from "@src/components/public";
import { SampleProvider } from "@src/libs/context";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import LoadingPage from "@src/components/public/Loading";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState<boolean>(false);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  return (
    <>
      <Head>
        <title>{`쿤더[KUNDER] - KOREA UNDERGROUND MUSIC SITE`}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
        />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <SampleProvider>
        {pageLoading && <LoadingPage />}
        <PlayBar />
        <Component {...pageProps} />
      </SampleProvider>
    </>
  );
}

export default MyApp;
