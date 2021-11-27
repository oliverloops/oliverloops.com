import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
//UI components
import NowPlaying from "./NowPlaying";

export default function Footer() {
  return (
    <footer className="flex justify-center dark:bg-gray-900">
      <div className="flex flex-col justify-center max-w-3/5 w-3/5 ">
        <div className="h-px w-full bg-gray-300 dark:bg-gray-700 transition-all"></div>
        <div className="flex justify-center mt-8">
          <NowPlaying />
        </div>
        <div className="flex justify-center mb-4 pt-4">
          <a href="https://twitter.com/oliverloops">
            <FaTwitter className="mr-4 text-2xl hover:text-blue-400 dark:text-white transition-all" />
          </a>
          <a href="https://github.com/oliverloops">
            <FaGithub className="mr-4 text-2xl hover:text-gray-400 dark:text-white transition-all" />
          </a>
          <a href="https://www.linkedin.com/in/oliver-lopez-a57a88165/">
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
      </div>
    </footer>
  );
}
