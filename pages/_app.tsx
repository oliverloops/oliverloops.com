import Layout from "../components/Layout";
import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import { Component } from "react";

function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <ThemeProvider attribute="class">
      <Layout pageTitle="Oliver Lopez" description="My personal blog">
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
