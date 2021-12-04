import "../styles/global.css";
import "@grikomsn/cal-sans";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";

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
