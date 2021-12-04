import Link from "next/link";

export default function HeadPost({ meta, link }: { meta: any; link: string }) {
  return (
    <div className="flex justify-center flex-col">
      <Link href={"/blog" + link}>
        <a className="heading text-2xl font-bold text-blue-500 dark:text-blue-400 transition-all">
          {meta.title}
        </a>
      </Link>
      <div className="heading text-xl font-semibold dark:text-white transition-all">
        {meta.description}
      </div>
      <div className="flex justify-between row">
        <div className="flex text-gray-400">
          <p className="basic-text">{meta.date}</p>
          <div className="px-2 text-gray-400">
            <p className="basic-text">{meta.readTime} min read</p>
          </div>
        </div>
      </div>
    </div>
  );
}
