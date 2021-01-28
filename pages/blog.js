import { useState } from "react";
import { motion } from "framer-motion";
//UI components
import Search from "../components/Search";
import { Post } from "../components/Post";
import { posts } from "../getAllPosts";

export default function Blog() {
  const [postList, setPostList] = useState(posts);

  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
          translateX: -800,
        },
        pageAnimate: {
          opacity: 1,
          translateX: 0,
        },
      }}
      className="flex flex-col mx-auto"
    >
      <h1 className="text-3xl font-extrabold dark:text-white">Blog</h1>
      <p className="mt-4 mb-4 dark:text-white">
        I want to start writing and sharing all my experiences, projects and
        other cool stuff.
      </p>
      <Search />
      {postList
        .slice()
        .reverse()
        .map((post) => (
          <Post key={post.link} post={post} />
        ))}
    </motion.div>
  );
}
