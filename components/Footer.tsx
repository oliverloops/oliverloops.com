 import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
//*UI components
import NowPlaying from "./NowPlaying";

export default function Footer() {
  return (
    <footer className="transition duration-300 flex justify-center items-start max-w-3xl w-full mx-auto bg-gray-50 dark:bg-gray-900 pb-8">
      <div className="flex flex-col justify-between w-10/12 md:w-full">
        <div className="h-px w-full bg-gray-300 dark:bg-gray-700"></div>
        <div className="flex flex-col md:flex-row justify-between md:items-center mt-8 mb-12">
          <div className="mb-8 md:mb-0">
            <NowPlaying />
          </div>
          <p className="flex w-1/4 items-center basic-text text-xl md:text-lg font-bold text-center dark:text-white">
            oliverloops<span className="text-green-500 text-xl md:text-lg">.</span>com
          </p>
          <div className="flex mt-5 md:mt-0">
            <a 
              className="mr-1.5 p-1.5 border-2 border-black dark:border-white rounded-3xl" 
              href="https://twitter.com/oliverloops"
            >
              <FaTwitter size={21} />
            </a>
            <a
              className="mx-1.5 p-1.5 border-2 border-black dark:border-white rounded-3xl"
              href="https://github.com/oliverloops"
            >
              <FaGithub size={21} />
            </a>
            <a
              className="ml-1.5 p-1.5 border-2 border-black dark:border-white rounded-3xl"
              href="https://www.linkedin.com/in/oliver-lopez-a57a88165/"
            >
              <FaLinkedinIn size={21} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
