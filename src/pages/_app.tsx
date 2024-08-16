import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Footer from "../components/footer";
import Main from "../components/main";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib/react-query";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <Header />
          <Main>
            <Component {...pageProps} />
          </Main>
          <Footer />
        </SessionProvider>
      </QueryClientProvider>
    </>
  );
}
