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
    <div className="flex flex-col md:max-w-3/5 md:w-3/5 mx-auto pt-12 pb-20">
      <h1 className="text-3xl md:text-4xl font-extrabold dark:text-white transition-all">
        Blog
      </h1>
      <p className="text-lg font-light mt-2 mb-4 dark:text-white transition-all">
        All about my ideas, experiences, projects and other cool stuff.
      </p>
      <Search setResult={setResult} />
      {result === ""
        ? postList
            .slice()
            .reverse()
            .map((post: any) => <Post key={post.link} post={post} />)
        : postList
            .slice()
            .reverse()
            .map(
              (post: any) =>
                post.module.meta.title.toLowerCase().includes(result) && (
                  <Post key={post.link} post={post} />
                )
            )}
    </div>
  );
}
