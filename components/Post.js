import Link from "next/link";
import HeadPost from "./HeadPost";

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <article className="w-full flex flex-col justify-center items-start h-32">
      <HeadPost meta={meta} />
      <Link href={"/blog" + link}>
        <a>Read more →</a>
      </Link>
    </article>
  );
};
