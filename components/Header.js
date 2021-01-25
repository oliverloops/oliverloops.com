import { useContext } from "react";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import { IoMdMoon } from "react-icons/io";
import { HiSun } from "react-icons/hi";
//Context
import { darkMode } from "./Layout";

//Custom styled component(s)
const Anchor = styled.a`
  text-decoration: none;
  background-image: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff),
    linear-gradient(#000, #000);
  cursor: pointer;
  background-size: 20px 2px, 100% 2px, 0 2px;
  background-position: calc(20px * -1) 100%, 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 500ms linear, background-position 500ms linear;

  &:hover {
    background-size: 20px 2px, 0 2px, 100% 2px;
    background-position: calc(100% + 50px) 100%, 100% 100%, 0 100%;
  }
`;

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
      h-18 p-8 py-8 bg-white dark:bg-black bg-opacity-60"
    >
      <div className="pr-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => isDarkModeOn()}
          className="flex justify-center items-center rounded-md bg-gray-200 dark:bg-gray-700 h-10 w-10"
        >
          {darkContext.dark ? (
            <HiSun className="icon dark:text-white" />
          ) : (
            <IoMdMoon className="icon" />
          )}
        </motion.button>
      </div>
      <div className="flex justify-evenly flex-row w-42 px-8 pr-2">
        <div className="p-1 sm:p-4">
          <Link href="/portfolio">
            <Anchor className="text-md dark:text-white">Portfolio</Anchor>
          </Link>
        </div>
        <div className="p-1 sm:p-4">
          <Link href="/blog">
            <Anchor className="text-md dark:text-white">Blog</Anchor>
          </Link>
        </div>
        <div className="p-1 sm:p-4">
          <Link href="/about">
            <Anchor className="text-md dark:text-white">About</Anchor>
          </Link>
        </div>
        <div className="p-1 sm:p-4">
          <Link href="/">
            <Anchor className="text-md dark:text-white">Home</Anchor>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
