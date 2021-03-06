import Link from "next/link";

export default function HeadPost({ meta, link }) {
  return (
    <div className="flex justify-center flex-col">
      <Link href={"/blog" + link}>
        <a className="text-2xl font-bold text-blue-500 dark:text-blue-300 transition-all">
          {meta.title}
        </a>
      </Link>
      <div className="text-xl font-semibold dark:text-white transition-all">
        {meta.description}
      </div>
      <div className="flex justify-between row">
        <div className="flex text-gray-400">
          {meta.date}
          <div className="px-2 text-gray-400">
            <span role="img" aria-label="book">
              📖
            </span>{" "}
            &nbsp;
            {meta.readTime} min read
          </div>
        </div>
      </div>
    </div>
  );
}
