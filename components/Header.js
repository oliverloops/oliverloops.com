import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoMdMoon } from "react-icons/io";
import { HiSun } from "react-icons/hi";

//Context
import { darkMode } from "../components/Layout";

export default function Header() {
  const darkContext = useContext(darkMode);

  const switchTheme = () => {
    if (darkContext.isMounted) {
      darkContext.setTheme(darkContext.theme === "light" ? "dark" : "light");
    }
  };

  return (
    <nav className="bg-gray-50 dark:bg-gray-900 bg-opacity-40 dark:bg-opacity-60 sticky sticky-nav">
      <div className="flex justify-between mx-auto max-w-3/5 w-3/5 h-18 ">
        <div className="flex flex-col justify-center">
          <Link href="/">
            <a className="text-3xl font-bold dark:text-white">oliverloops</a>
          </Link>
        </div>
        <div className="flex justify-evenly items-center">
          <div className="p-1 sm:p-4">
            <Link href="/blog">
              <a className="text-md dark:text-white">Blog</a>
            </Link>
          </div>
          <div className="p-1 sm:p-4">
            <Link href="/about">
              <a className="text-md dark:text-white">About</a>
            </Link>
          </div>
          <div className="p-1 sm:p-4">
            <Link href="/portfolio">
              <a className="text-md dark:text-white">Experiments</a>
            </Link>
          </div>
          <div className="p-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => switchTheme()}
              className="flex justify-center items-center rounded-md bg-gray-200 dark:bg-gray-700 h-10 w-10"
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
    </nav>
  );
}
