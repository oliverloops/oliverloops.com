import Link from "next/link";
import { motion } from "framer-motion";
//UI components
import HeadPost from "./HeadPost";

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <article
      className="flex flex-col 
      justify-center items-start h-32"
    >
      <HeadPost meta={meta} link={link} />
    </article>
  );
};
