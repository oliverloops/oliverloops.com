import Image from "next/image";

export default function AuthorHeadPost({ meta, link }) {
  return (
    <div className="flex justify-center flex-col space-y-2 mb-6">
      <h1 className="mb-2 text-4xl font-extrabold  dark:text-white transition-all">
        {meta.title}
      </h1>
      <div className="flex space-x-2 row">
        <Image
          className="rounded-full"
          src={"/me_cross.jpg"}
          alt={"Oliver Lopez"}
          width={25}
          height={25}
        />
        <p
          className="text-sm
         text-gray-700 dark:text-gray-300 transition-all"
        >
          {meta.author}
        </p>
        <span className="text-sm text-gray-700 dark:text-gray-300 transition-all">
          -
        </span>
        <div className="text-sm text-gray-700 dark:text-gray-300 transition-all">
          {meta.date}
        </div>
      </div>
      <div className="flex justify-between row">
        <div className="text-sm text-gray-400 dark:text-gray-500 transition-all">
          <span role="img" aria-label="book">
            📖
          </span>{" "}
          &nbsp;
          {meta.readTime} min read
        </div>
      </div>
    </div>
  );
}
