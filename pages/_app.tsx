import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import NewsLetterSub from "../components/page-components/NewsLetterSub";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <NewsLetterSub/>
      <Footer/>
    </>
  );
}
