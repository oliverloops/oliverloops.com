import Link from "next/link";

const PostCard = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <div className="p-8 pl-0">
      <Link href={"/blog" + link}>
        <a>
          <Content meta={meta} />
        </a>
      </Link>
    </div>
  );
};

const Content = ({ meta }) => {
  //colored box-shadow and border style
  const shadowFormula = `0.65rem 0.65rem #F3CB56, 0.65rem 0.65rem 0 4px #000`;

  return (
    <div
      style={{ boxShadow: shadowFormula }}
      className="flex justify-center flex-col p-4 border-4 bg-white dark:bg-gray-900 border-black dark:border-white rounded-xl"
    >
      <p className="text-xl font-bold text-yellow-300 dark:text-yellow-300 transition-all">
        {meta.title}
      </p>

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
