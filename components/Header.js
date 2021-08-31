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
      className="flex justify-between items-center mx-auto max-w-4xl w-full sticky sticky-nav
      h-18 p-8 py-8 bg-white dark:bg-gray-800"
    >
      <Link href="/">
        <a>
          {darkContext.theme === "dark" ? (
            <Image
              src={"/oliverloops_white.svg"}
              width={150}
              height={80}
              alt={"oliverloops"}
            />
          ) : (
            <Image
              src={"/oliverloops_black.svg"}
              width={150}
              height={80}
              alt={"oliverloops"}
            />
          )}
        </a>
      </Link>

      <div className="flex justify-evenly items-center w-42 px-4">
        <div className="p-1 sm:p-4">
          <Link href="/portfolio">
            <a className="text-md dark:text-white">Portfolio</a>
          </Link>
        </div>
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
    </motion.nav>
  );
}
