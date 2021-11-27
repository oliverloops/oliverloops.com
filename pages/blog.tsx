import { useState } from "react";
import { motion } from "framer-motion";
//UI components
import Search from "../components/Search";
import { Post } from "../components/Post";
import { posts } from "../getAllPosts";

export default function Blog() {
  const [postList, _] = useState(posts);
  const [result, setResult] = useState("");

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
      <h1 className="text-3xl font-extrabold dark:text-white transition-all">
        Blog
      </h1>
      <p className="mt-4 mb-4 dark:text-white transition-all">
        I want to start writing and sharing all my experiences, projects and
        other cool stuff.
      </p>
      <Search setResult={setResult} postList={postList} />
      {result === ""
        ? postList
            .slice()
            .reverse()
            .map((post) => <Post key={post.link} post={post} />)
        : postList
            .slice()
            .reverse()
            .map(
              (post) =>
                post.module.meta.title.toLowerCase().includes(result) && (
                  <Post key={post.link} post={post} />
                )
            )}
    </motion.div>
  );
}
