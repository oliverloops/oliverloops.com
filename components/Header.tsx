import { useState, useContext, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { IoMdMoon } from "react-icons/io";
import { HiSun, HiTranslate } from "react-icons/hi";
import { BsTranslate } from "react-icons/bs";

//i18n
import homeTranslations from "../pages/assets/homeTranslations.json";

//Context
import { darkMode } from "./Layout";

export default function Header() {
  const darkContext: any = useContext(darkMode);
  const button: any = useRef();
  const mobileMenu: any = useRef();

  //Handle i18n routes and trasnlations
  const { locale, locales, asPath } = useRouter();
  const [localeState, setLocaleState] = useState(locale);
  

  //Function to handle the open/closed nav menu
  const blockStyle = () => {
    if (
      button.current.className ===
      "flex flex-col justify-center w-full h-full menu-button-line-open before:bg-black after:bg-black dark:before:bg-white dark:after:bg-white"
    ) {
      button.current.className =
        "flex flex-col justify-center w-full h-full menu-button-line before:bg-black after:bg-black dark:before:bg-white dark:after:bg-white";

      mobileMenu.current.className =
        "flex-col hidden mobile-navbar-menu-closed absolute";
    } else {
      button.current.className =
        "flex flex-col justify-center w-full h-full menu-button-line-open before:bg-black after:bg-black dark:before:bg-white dark:after:bg-white";

      mobileMenu.current.className =
        "flex flex-col md:hidden mobile-navbar-menu-open bg-gray-50 dark:bg-gray-900 bg-opacity-40 dark:bg-opacity-60 fixed";
    }
  };

  //Switch theme method
  const switchTheme = () => {
    if (darkContext.isMounted) {
      darkContext.setTheme(darkContext.theme === "light" ? "dark" : "light");
    }
  };

  return (
    <div className="flex justify-center parent-sticky-nav">
      <div className="transition duration-300 flex justify-center items-center w-11/12 md:w-3/4 xl:w-7/12 px-4 md:px-8 py-3 md:py-4 md:px-0 md:py-0 mt-4 bg-neutral-200 rounded-full dark:bg-gray-700 bg-opacity-40 dark:bg-opacity-60 sticky sticky-nav">
        <nav className="flex flex-col md:flex-row justify-between md:items-center w-full relative md:mx-4 md:py-2 md:h-16">
          <div className="flex flex-col justify-center">
            <Link href="/">
              <a className="oliverloops text-lg md:text-2xl md:ml-2 dark:text-white">
                oliverloops<span className="text-green-500 dark:text-green-400">.</span>
              </a>
            </Link>
          </div>
          <div className="hidden md:block">
            {homeTranslations.navbar
              .filter((elem) => elem.locale === locale)
              .map((text) => (
                <div className="flex items-center">
                  <motion.div 
                    whileHover={{ opacity: 0.6 }}
                    className="flex items-center rounded-full p-1 sm:p-4 bg-gray-200 dark:bg-gray-700 h-10 mx-1 cursor-pointer"
                  >
                    <Link href="/blog">
                      <a className="basic-text pt-1 text-md dark:text-white cursor-pointer">
                        Blog
                      </a>
                    </Link>
                  </motion.div>
                  <motion.div 
                    whileHover={{ opacity: 0.6 }}
                    className="flex items-center rounded-full p-1 sm:p-4 bg-gray-200 dark:bg-gray-700 h-10 mx-1 cursor-pointer"
                  >
                    <Link href="/about">
                      <a className="basic-text pt-1 text-md dark:text-white">
                        {text.about}
                      </a>
                    </Link>
                  </motion.div>
                  <motion.div 
                    whileHover={{ opacity: 0.6 }}
                    className="flex items-center rounded-full p-1 sm:p-4 bg-gray-200 dark:bg-gray-700 h-10 mx-1 cursor-pointer"
                  >
                    <Link href="/portfolio">
                      <a className="bsic-text pt-1 text-md dark:text-white">
                        {text.experiments}
                      </a>
                    </Link>
                  </motion.div>
                  <div className="pl-2 py-4">
                    <Link href={asPath} locale={localeState}>
                      <motion.a
                        whileHover={{ opacity: 0.6 }}
                        onClick={() => setLocaleState(localeState === "EN" ? "ES" : "EN")}
                        className="flex justify-center items-center rounded-full bg-gray-200 dark:bg-gray-700 h-10 w-10 cursor-pointer"
                      >
                        {darkContext.theme === "dark" ? (
                          <BsTranslate className="icon dark:text-white" />
                        ) : (
                          <BsTranslate className="icon" />
                        )}
                      </motion.a>
                    </Link>
                  </div>
                  <div className="pl-3 py-4">
                    <motion.button
                      whileHover={{ opacity: 0.6 }}
                      onClick={() => switchTheme()}
                      className="flex justify-center items-center rounded-full bg-gray-200 dark:bg-gray-700 h-10 w-10"
                    >
                      {darkContext.theme === "dark" ? (
                        <HiSun className="icon dark:text-white" />
                      ) : (
                        <IoMdMoon className="icon" />
                      )}
                    </motion.button>
                  </div>
                </div>
              ))}
          </div>
        </nav>
        <div className="md:hidden">
          <button onClick={blockStyle} className="menu-mobile-button">
            <div
              ref={button}
              className="flex flex-col justify-center w-full h-full menu-button-line before:bg-black after:bg-black dark:before:bg-white dark:after:bg-white"
            ></div>
          </button>
        </div>
      </div>
      <ul
        ref={mobileMenu}
        className="flex-col hidden mobile-navbar-menu-closed fixed"
      >
        <li className="p-4 px-6">
          <div className="border-b-2 border-gray-200 px-2 py-3">
            <button onClick={blockStyle}>
              <Link href="/blog">
                <a className="basic-text text-xl font-semibold dark:text-white">
                  Blog
                </a>
              </Link>
            </button>
          </div>
        </li>
        <li className="p-4 px-6">
          <div className="border-b-2 border-gray-200 px-2 py-2">
            <button onClick={blockStyle}>
              <Link href="/about">
                <a className="basic-text text-xl font-semibold dark:text-white">
                  About
                </a>
              </Link>
            </button>
          </div>
        </li>
        <li className="p-4 px-6">
          <div className="border-b-2 border-gray-200 px-2 py-2">
            <button onClick={blockStyle}>
              <Link href="/portfolio">
                <a className="basic-text text-xl font-semibold dark:text-white">
                  Portfolio
                </a>
              </Link>
            </button>
          </div>
        </li>
        <li className="flex items-center">          
        <div className="pl-2 py-4">
          <Link href={asPath} locale={localeState}>
            <motion.a
              whileHover={{ opacity: 0.6 }}
              onClick={() => setLocaleState(localeState === "EN" ? "ES" : "EN")}
              className="flex justify-center items-center rounded-full bg-gray-200 dark:bg-gray-700 h-10 w-10 cursor-pointer"
            >
              {darkContext.theme === "dark" ? (
                <BsTranslate className="icon dark:text-white" />
                  ) : (
                    <BsTranslate className="icon" />
                  )}
            </motion.a>
          </Link>
        </div>
        <div className="pl-3 py-4">
          <motion.button
            whileHover={{ opacity: 0.6 }}
            onClick={() => switchTheme()}
            className="flex justify-center items-center rounded-full bg-gray-200 dark:bg-gray-700 h-10 w-10"
          >
            {darkContext.theme === "dark" ? (
              <HiSun className="icon dark:text-white" />
                ) : (
              <IoMdMoon className="icon" />
            )}
          </motion.button>
        </div>
        </li>
      </ul>
    </div>
  );
}
