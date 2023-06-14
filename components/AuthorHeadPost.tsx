import Image from "next/image";
import { FiEye } from "react-icons/fi";

export default function AuthorHeadPost({
  meta,
  isBlogPost,
}: {
  meta: any;
  isBlogPost: boolean;
}) {
  return (
    <div className="flex flex-col space-y-2 mb-6">
      <h1 className="heading tracking-wide mb-4 text-4xl font-extrabold  dark:text-white">
        {meta.title}
      </h1>
      <div className="flex justify-between items-center py-2">
        <div className="flex items-center space-x-2 row">
          <p className="text-sm py-1 px-3 rounded-full border-black border-2 bg-emerald-300 dark:bg-emerald-400 dark:border-white dark:text-black">
            {meta.category}
          </p>
        </div>
        <div className="flex items-center space-x-2 row">
          <span className="flex items-center basic-text text-sm text-gray-700 dark:text-gray-300">
            <FiEye size={16} /> &nbsp; 0 Views
          </span>
          <span className="text-sm text-gray-700 dark:text-gray-300">-</span>
          <p className="basic-text text-sm text-gray-700 dark:text-gray-300">
            {meta.date}
          </p>
        </div>
      </div>
    </div>
  );
}
