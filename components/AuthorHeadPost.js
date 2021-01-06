import Link from "next/link";
import Image from "next/image";

export default function AuthorHeadPost({ meta, link }) {
  return (
    <div className="flex justify-center flex-col">
      <Link href={"/blog" + link}>
        <a className="text-4xl font-extrabold  dark:text-white">{meta.title}</a>
      </Link>
      <div className="text-xl font-semibold   dark:text-white">
        {meta.description}
      </div>
      <div className="flex justify-between row">
        {/* <Image /> */}
        <p>{meta.author}</p>
        <div className="text-gray-400">{meta.date}</div>
      </div>
      <div className="flex justify-between row">
        <div className="text-gray-400">
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
