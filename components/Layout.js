import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>

      <main>
        <Header />
        <div className="flex flex-col justify-center items-start max-w-2xl p-8">
          {children}
        </div>
      </main>
    </>
  );
}
