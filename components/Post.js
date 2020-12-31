import Link from "next/link";
//UI components
import HeadPost from "./HeadPost";

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <article className="w-full flex flex-col justify-center items-start h-36">
      <HeadPost meta={meta} />
      <Link href={"/blog" + link}>
        <a className="text-blue-700 hover:text-blue-500">Read more →</a>
      </Link>
    </article>
  );
};
