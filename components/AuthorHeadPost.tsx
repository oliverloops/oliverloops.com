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
          <Image
            className="rounded-full"
            src={"/static/images/me_outside.jpeg"}
            alt={"Oliver Lopez"}
            width={25}
            height={25}
          />
          <p
            className="basic-text text-sm
         text-gray-700 dark:text-gray-300"
          >
            {meta.author}
          </p>
          <span className="text-sm text-gray-700 dark:text-gray-300">-</span>
          <p className="basic-text text-sm text-gray-700 dark:text-gray-300">
            {meta.date}
          </p>
        </div>
        <div className="flex space-x-2 row">
          <p
            className="basic-text text-sm
         text-gray-700 dark:text-gray-300"
          >
            {meta.readTime} min read
          </p>
          <span className="text-sm text-gray-700 dark:text-gray-300">-</span>
          <span className="flex items-center basic-text text-sm text-gray-700 dark:text-gray-300">
            <FiEye size={16} /> &nbsp; 0 Views
          </span>
        </div>
      </div>
    </div>
  );
}
