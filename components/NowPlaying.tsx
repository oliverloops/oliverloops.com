import Image from "next/image";
import useSWR from "swr";
import { motion } from "framer-motion";

import fetcher from "../lib/fetcher";

export default function NowPlaying() {
  const { data } = useSWR("/api/now-playing", fetcher);
  console.log(data);

  return (
    <div className="flex w-full justify-center">
        <motion.div
          whileTap={{ translateX: 4, translateY: 4 }} 
          whileHover={{ translateX: 4, translateY: 4 }} 
          className="flex items-center z-20 w-11 h-11 bg-gray-50/90 dark:bg-slate-900/90 rounded-xl border-2 border-black dark:border-white"
        >
          <Image
            priority
            height={42}
            width={42}
            src={data?.albumImageUrl || "/static/images/gorilla_ninja.png"}
            className="rounded-lg"
            alt="Song Cover"
          />
        </motion.div>
        <div
          style={{ 
            backgroundColor: "#2DD39C",
            // transform: "translate(-40px, 4px)",
          }} 
          className="w-11 h-11 z-10 -translate-x-10 translate-y-1 border-2 rounded-xl border-black dark:border-white"
        >
        </div>
        <div 
          // style={{ transform: "translate(-30px, 4px)" }}  
          className="flex flex-col  justify-center items-start -translate-x-8 translate-y-1 md:-translate-x-7 transition-all"
        >
          <a
            className="remarkable text-sm text-gray-800 dark:text-gray-200 font-bold w-44 max-w-44 md:w-36 md:max-w-36 truncate transition-all"
            href={data?.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data?.title ?? "Not Playing"}
          </a>
          <p className="basic-text text-sm font-bold text-gray-500 dark:text-gray-300 w-44 max-w-44 md:w-36 md:max-w-36 truncate transition-all">
            {data?.artist ?? "Spotify"}
          </p>
        </div>
        <svg style={{ transform: "translate(-30px, 4px)" }} className="h-4 w-4 m-1 ml-2" viewBox="0 0 168 168">
          <path
            fill="#1ED760"
            d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
          />
        </svg>
    </div>
  );
}
