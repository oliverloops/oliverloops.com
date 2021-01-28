import { motion } from "framer-motion";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
//UI components
import NowPlaying from "./NowPlaying";

export default function Footer() {
  return (
    <motion.footer
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
          translateX: -800,
        },
        pageAnimate: {
          opacity: 1,
          translateX: 0,
        },
      }}
      className="flex flex-col justify-center dark:bg-black"
    >
      <div className="flex justify-center mt-8">
        <NowPlaying />
      </div>
      <div className="flex justify-center mb-4 pt-4">
        <a href="#">
          <FaTwitter className="mr-4 text-2xl hover:text-blue-400 dark:text-white transition-all" />
        </a>
        <a href="#">
          <FaGithub className="mr-4 text-2xl hover:text-gray-400 dark:text-white transition-all" />
        </a>
        <a href="">
          <FaLinkedin className="mr-4 text-2xl hover:text-blue-500 dark:text-white transition-all" />
        </a>
        <a href="#">
          <MdEmail className="mr-4 text-2xl hover:text-indigo-500 dark:text-white transition-all" />
        </a>
      </div>
      <small className="mb-4 flex justify-center dark:text-white transition-all">
        Hosted on&nbsp;
        <span role="img" aria-label="triangule">
          ▲
        </span>
        Vercel | oliverloops ©2021
      </small>
    </motion.footer>
  );
}
