import type { AppProps } from "next/app";
import "../styles/globals.css";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(3341604, 6);
  }, []);
  return <Component {...pageProps} />;
}
