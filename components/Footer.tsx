//UI components
import NowPlaying from "./NowPlaying";

export default function Footer() {
  return (
    <footer className="flex justify-center dark:bg-gray-900">
      <div className="flex flex-col justify-between max-w-3/5 w-3/5">
        <div className="h-px w-full bg-gray-300 dark:bg-gray-700 transition-all"></div>
        <div className="flex justify-between items-center mt-8 mb-12">
          <div className="flex justify-center">
            <NowPlaying />
          </div>
          <p className="flex justify-center dark:text-white transition-all">
            Built with Next.js and hosted on&nbsp;
            <span role="img" aria-label="triangule">
              ▲
            </span>
            Vercel
          </p>
          <span className="flex">
            <a href="https://twitter.com/oliverloops">
              <p className="font-semibold px-4">Twitter</p>
            </a>
            <a href="https://github.com/oliverloops">
              <p className="font-semibold pl-4">GitHub</p>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
