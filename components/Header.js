import { useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiMoon } from "react-icons/hi";
import { HiSun } from "react-icons/hi";
//Context
import { darkMode } from "./Layout";

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
          opacity: 0,
          translateY: -200,
        },
        pageAnimate: {
          opacity: 1,
          translateY: 0,
        },
      }}
      className="flex justify-around flex-row fixed sticky sticky-nav top-0 h-18 py-16 bg-white dark:bg-black bg-opacity-60"
    >
      <div>
        <button
          onClick={() => isDarkModeOn()}
          className="flex justify-center items-center rounded-md bg-gray-200 dark:bg-gray-700 h-10 w-10 "
        >
          {darkContext.dark ? (
            <HiSun className="icon dark:text-white" />
          ) : (
            <HiMoon className="icon" />
          )}
        </button>
      </div>
      <div className="flex justify-around flex-row w-64">
        <div className="p-1">
          <Link href="/blog">
            <a className="dark:text-white">Blog</a>
          </Link>
        </div>
        <div className="p-1">
          <Link href="/">
            <a className="dark:text-white">Portfolio</a>
          </Link>
        </div>
        <div className="p-1">
          <Link href="/">
            <a className="dark:text-white">About</a>
          </Link>
        </div>
        <div className="p-1">
          <Link href="/">
            <a className="dark:text-white">Home</a>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
