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
      <span className="mb-8">
        <h1 className="heading text-3xl md:text-4xl dark:text-white transition-all">
          Blog
        </h1>
        <p className="remarkable text-lg font-light mt-2 dark:text-white transition-all">
          All about my ideas, experiences, projects and other cool stuff.
        </p>
      </span>
      <Search setResult={setResult} />
      <main className="grid grid-cols-1 md:grid-cols-2 w-full md:w-11/12 gap-y-14 py-8">
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
      </main>
    </div>
  );
}
