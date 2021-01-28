import { useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoMdMoon } from "react-icons/io";
import { HiSun } from "react-icons/hi";
//Context
import { darkMode } from "../components/Layout";

export default function Header() {
  const darkContext = useContext(darkMode);

  //Check if dark mode is active and change the status
  const isDarkModeOn = () => {
    if (!darkContext.dark) {
      darkContext.activeDark(true);
    } else {
      darkContext.activeDark(false);
    }
  };

  return (
    <motion.nav
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          translateY: -800,
        },
        pageAnimate: {
          translateY: 0,
        },
      }}
      className="flex justify-between items-center mx-auto max-w-4xl w-full fixed sticky sticky-nav
      h-18 p-8 py-8 bg-white dark:bg-black bg-opacity-60 transition-all"
    >
      <div className="pr-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => isDarkModeOn()}
          className="flex justify-center items-center rounded-md bg-gray-200 dark:bg-gray-700 h-10 w-10 transition-all"
        >
          {darkContext.dark ? (
            <HiSun className="icon dark:text-white transition-all" />
          ) : (
            <IoMdMoon className="icon" />
          )}
        </motion.button>
      </div>
      <div className="flex justify-evenly flex-row w-42 px-8 pr-2">
        <div className="p-1 sm:p-4">
          <Link href="/portfolio">
            <a className="text-md dark:text-white transition-all">Portfolio</a>
          </Link>
        </div>
        <div className="p-1 sm:p-4">
          <Link href="/blog">
            <a className="text-md dark:text-white transition-all">Blog</a>
          </Link>
        </div>
        <div className="p-1 sm:p-4">
          <Link href="/about">
            <a className="text-md dark:text-white transition-all">About</a>
          </Link>
        </div>
        <div className="p-1 sm:p-4">
          <Link href="/">
            <a className="text-md dark:text-white transition-all">Home</a>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
