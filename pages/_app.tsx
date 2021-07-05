import { PlayBar } from "@src/components/public";
import { SampleProvider } from "@src/libs/context";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import LoadingPage from "@src/components/public/Loading";

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
    <SampleProvider>
      {pageLoading && <LoadingPage/>}  
      <PlayBar />
      <Component {...pageProps} />
    </SampleProvider>
  );
}

export default MyApp;
