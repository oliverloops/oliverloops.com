//UI components
import NowPlaying from "./NowPlaying";

export default function Footer() {
  return (
    <footer className="flex justify-center dark:bg-gray-900 pb-8">
      <div className="flex flex-col justify-between max-w-10/12 w-10/12 md:max-w-3/5 md:w-3/5">
        <div className="h-px w-full bg-gray-300 dark:bg-gray-700 transition-all"></div>
        <div className="flex flex-col md:flex-row justify-between md:items-center mt-8 mb-12">
          <div className="mb-8 md:mb-0">
            <NowPlaying />
          </div>
          <p className="flex basic-text text-center dark:text-white transition-all">
            Built with Next.js and hosted on&nbsp;
            <span role="img" aria-label="triangule">
              ▲
            </span>
            <span className="heading tracking-wide">Vercel</span>
          </p>
          <span className="flex mt-2 md:mt-0">
            <a href="https://twitter.com/oliverloops">
              <p className="basic-text font-semibold pr-4">Twitter</p>
            </a>
            <a href="https://github.com/oliverloops">
              <p className="basic-text font-semibold pl-4">GitHub</p>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
