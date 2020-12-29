import Layout from "../components/Layout";

function App({ Component, pageProps }) {
  return (
    <Layout pageTitle="oliverloops.com | Home" description="My personal blog">
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
