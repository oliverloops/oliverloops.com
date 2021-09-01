import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();
    // Retrieve styles from components in the page
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );
    // Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();
    // Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en">
        <Head>{this.props.styleTags}</Head>
        <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
