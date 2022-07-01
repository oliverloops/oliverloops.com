import { useContext, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { IoMdMoon } from "react-icons/io";
import { HiSun } from "react-icons/hi";

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
    <>
      <div className="transition duration-300 flex justify-center items-center px-8 py-4 md:px-0 md:py-0 bg-gray-50 dark:bg-gray-900 bg-opacity-40 dark:bg-opacity-60 sticky sticky-nav">
        <nav className="flex flex-col md:flex-row justify-between w-full relative max-w-3xl mx-auto md:py-2 md:h-18 ">
          <div className="flex flex-col justify-center">
            <Link href="/">
              <a className="oliverloops text-xl md:text-2xl  dark:text-white">
                oliverloops.
              </a>
            </Link>
          </div>
          <div className="hidden md:block">
            {homeTranslations.navbar
              .filter((elem) => elem.locale === locale)
              .map((text) => (
                <div className="flex items-center">
                  <div className="p-1 sm:p-4">
                    <Link href="/blog">
                      <a className="basic-text py-1 after:bg-black dark:after:bg-white underline-animation text-md font-semibold dark:text-white">
                        Blog
                      </a>
                    </Link>
                  </div>
                  <div className="p-1 sm:p-4">
                    <Link href="/about">
                      <a className="basic-text py-1 after:bg-black dark:after:bg-white underline-animation text-md font-semibold dark:text-white">
                        {text.about}
                      </a>
                    </Link>
                  </div>
                  <div className="p-1 sm:p-4">
                    <Link href="/portfolio">
                      <a className="bsic-text py-1 after:bg-black dark:after:bg-white underline-animation text-md font-semibold dark:text-white">
                        {text.experiments}
                      </a>
                    </Link>
                  </div>
                  <div className="p-1 sm:p-4">
                    {locales?.map((l, i) => (
                      <Link key={i} href={asPath} locale={l}>
                        <a className="bsic-text py-1 after:bg-black dark:after:bg-white underline-animation text-md font-semibold dark:text-white">
                          {l === "EN" ? l.concat("/") : l}
                        </a>
                      </Link>
                    ))}
                  </div>
                  <div className="pl-4 py-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
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
            <Link href="/blog">
              <a className="basic-text text-xl font-semibold dark:text-white">
                Blog
              </a>
            </Link>
          </div>
        </li>
        <li className="p-4 px-6">
          <div className="border-b-2 border-gray-200 px-2 py-2">
            <Link href="/about">
              <a className="basic-text text-xl font-semibold dark:text-white">
                About
              </a>
            </Link>
          </div>
        </li>
        <li className="p-4 px-6">
          <div className="border-b-2 border-gray-200 px-2 py-2">
            <Link href="/portfolio">
              <a className="basic-text text-xl font-semibold dark:text-white">
                Portfolio
              </a>
            </Link>
          </div>
        </li>
        <li className="flex items-center">
          <div className="p-4 px-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
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
          <div className="p-1 sm:p-4">
            {locales?.map((l, i) => (
              <Link key={i} href={asPath} locale={l}>
                <a className="bsic-text py-1 after:bg-black dark:after:bg-white underline-animation text-md font-semibold">
                  {l}
                </a>
              </Link>
            ))}
          </div>
        </li>
      </ul>
    </>
  );
}
