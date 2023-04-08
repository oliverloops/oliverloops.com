import { GoMarkGithub } from "react-icons/go";
import { FaTwitter } from "react-icons/fa";
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
          <p className="flex items-center basic-text font-bold text-center dark:text-white">
            oliverloops<span className="text-green-500">.</span>
          </p>
          <div className="flex mt-2 md:mt-0">
            <span className="mr-2 p-1.5 border-2 border-black dark:border-white rounded-3xl">
              <a href="https://twitter.com/oliverloops">
                <FaTwitter size={18} />
              </a>
            </span>
            <span className="ml-2 p-1.5 border-2 border-black dark:border-white rounded-3xl">
              <a href="https://github.com/oliverloops">
                <GoMarkGithub size={18} />
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
