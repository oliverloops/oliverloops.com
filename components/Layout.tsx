import { useState, useEffect, createContext } from "react";
import Head from "next/head";
import { useTheme } from "next-themes";
//UI components
import Header from "./Header";
import Footer from "./Footer";

export const darkMode = createContext({});

export default function Layout({
  children,
  pageTitle,
  description,
}: {
  children: any;
  pageTitle: string;
  description: string;
}) {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>

      <darkMode.Provider
        value={{ theme: theme, setTheme: setTheme, isMounted: isMounted }}
      >
        <main>
          <Header />
          <div className="flex flex-col  justify-center items-start w-full mx-auto  dark:bg-gray-900">
            {children}
          </div>
          <Footer />
        </main>
      </darkMode.Provider>
    </>
  );
}
