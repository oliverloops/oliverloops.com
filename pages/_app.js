import Layout from "../components/Layout";
import "../styles/global.css";
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout pageTitle="Oliver Lopez | Home" description="My personal blog">
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
