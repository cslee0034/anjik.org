import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Footer from "../components/footer";
import Main from "../components/main";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  );
}
