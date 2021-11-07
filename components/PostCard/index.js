import Link from "next/link";

const PostCard = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <div className="m-8 ml-2">
      <Content meta={meta} link={link} />
    </div>
  );
};

const Content = ({ meta, link }) => {
  return (
    <div className="flex justify-center flex-col p-4 border-4 border-black rounded-xl">
      <Link href={"/blog" + link}>
        <a className="text-xl font-bold text-blue-500 dark:text-blue-400 transition-all">
          {meta.title}
        </a>
      </Link>
      <div className="text-lg font-semibold dark:text-white transition-all">
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
};

export default PostCard;
