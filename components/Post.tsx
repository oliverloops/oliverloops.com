import Link from "next/link";
import { FiEye } from "react-icons/fi";

export const Post = ({ post }: { post: any }) => {
  const {
    link,
    module: { meta },
  } = post;

  //colored box-shadow and border style
  const shadowFormula: string = `0.65rem 0.65rem #5EA5F7, 0.65rem 0.65rem 0 4px #000`;

  return (
    <Link href={`/blog${link}`}>
      <a>
        <div
          style={{ boxShadow: shadowFormula }}
          className="flex justify-center flex-col md:w-80 md:h-40 px-4 py-6 border-4 bg-white dark:bg-gray-900 border-black dark:border-white rounded-xl"
        >
          <p className="heading text-lg md:text-xl font-bold text-blue-400 dark:text-blue-300 pr-2 pb-2 transition-all">
            {meta.title}
          </p>
          <div className="flex justify-between items-end pt-2">
            {/* <div className="flex items-center">
              <FiEye
                className="text-black dark:text-gray-100 transition-all"
                size={18}
              />
              <p className="basic-text text-xs md:text-sm text-black dark:text-gray-100 font-semibold ml-1.5 transition-all">
                0 Views
              </p>
            </div> */}
            <div className="flex flex-col text-gray-400">
              <p className="basic-text text-xs md:text-sm text-black dark:text-gray-100 font-semibold transition-all">
                {meta.readTime} min read
              </p>
              <p className="basic-text text-xs md:text-sm text-black  dark:text-gray-100  font-medium transition-all">
                {meta.date}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
