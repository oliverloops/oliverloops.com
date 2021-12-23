import { useContext, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoMdMoon } from "react-icons/io";
import { HiSun } from "react-icons/hi";

//Context
import { darkMode } from "./Layout";

export default function Header() {
  const darkContext: any = useContext(darkMode);
  const button: any = useRef();
  const mobileMenu: any = useRef();

  //Function to handle the open/closed nav menu
  const blockStyle = () => {
    if (
      button.current.className ===
      "flex flex-col justify-center w-full h-full menu-button-line-open"
    ) {
      button.current.className =
        "flex flex-col justify-center w-full h-full menu-button-line";

      mobileMenu.current.className =
        "flex-col hidden mobile-navbar-menu-closed absolute";
    } else {
      button.current.className =
        "flex flex-col justify-center w-full h-full menu-button-line-open";

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
      <nav className="flex justify-between items-center px-8 py-4 md:px-0 md:py-0 bg-gray-50 dark:bg-gray-900 bg-opacity-40 dark:bg-opacity-60 sticky sticky-nav">
        <div className="flex flex-col md:flex-row justify-between md:mx-auto md:max-w-3/5 md:w-3/5 md:h-18 ">
          <div className="flex flex-col justify-center">
            <Link href="/">
              <a className="oliverloops text-xl md:text-2xl  dark:text-white">
                oliverloops.
              </a>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center">
              <div className="p-1 sm:p-4">
                <Link href="/blog">
                  <a className="basic-text underline-animation text-md font-semibold dark:text-white">
                    Blog
                  </a>
                </Link>
              </div>
              <div className="p-1 sm:p-4">
                <Link href="/about">
                  <a className="basic-text text-md font-semibold dark:text-white">
                    About
                  </a>
                </Link>
              </div>
              <div className="p-1 sm:p-4">
                <Link href="/portfolio">
                  <a className="bsic-text text-md font-semibold dark:text-white">
                    Experiments
                  </a>
                </Link>
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
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={blockStyle} className="menu-mobile-button">
            <div
              ref={button}
              className="flex flex-col justify-center w-full h-full menu-button-line"
            ></div>
          </button>
        </div>
      </nav>
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
                Experiments
              </a>
            </Link>
          </div>
        </li>
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
      </ul>
    </>
  );
}
