import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Footer from "../components/footer";
import Main from "../components/main";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider>
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </SessionProvider>
    </>
  );
}
