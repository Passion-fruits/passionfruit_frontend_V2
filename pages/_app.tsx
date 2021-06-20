import { PlayBar } from "@src/components/public";
import { SampleProvider } from "@src/libs/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SampleProvider>
      <PlayBar />
      <Component {...pageProps} />
    </SampleProvider>
  );
}

export default MyApp;
