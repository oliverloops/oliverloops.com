import { useState, createContext } from "react";
import Head from "next/head";
//UI components
import Header from "./Header";
import Footer from "../components/Footer";

export const darkMode = createContext();

export default function Layout({ children, pageTitle, description }) {
  const [dark, setDark] = useState(false);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>

      <darkMode.Provider value={{ dark: dark, activeDark: setDark }}>
        <main className={dark ? "dark" : "white"}>
          <Header />
          <div className="flex flex-col  justify-center items-start w-full mx-auto px-8 py-4 dark:bg-black">
            {children}
          </div>
          <Footer />
        </main>
      </darkMode.Provider>
    </>
  );
}
