import Link from "next/link";

const PostCard = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <div className="p-8 pl-0">
      <Content meta={meta} link={link} />
      {/* <div className="border-4 bg-blue-400 dark:bg-blue-500 w-200 h-40 border-black dark:border-white rounded-xl"></div> */}
    </div>
  );
};

const Content = ({ meta, link }) => {
  //colored box-shadow and border style
  const shadowFormula = `0.65rem 0.65rem #5ea5f7, 0.65rem 0.65rem 0 4px #000`;

  return (
    <div
      style={{ boxShadow: shadowFormula }}
      className="flex justify-center flex-col p-4 border-4 bg-white dark:bg-gray-900 border-black dark:border-white rounded-xl"
    >
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
