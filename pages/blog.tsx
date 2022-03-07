import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
//UI components
import Search from "../components/Search";
import { Post } from "../components/Post";
import { posts } from "../getAllPosts";

import blogTranslations from "./assets/blogTranslations.json";

export default function Blog() {
  const { locale } = useRouter();
  const [postList, _] = useState(posts);
  const [result, setResult] = useState("");

  return (
    <>
      {blogTranslations.blog
        .filter((p) => p.locale === locale)
        .map((text) => (
          <div className="flex flex-col md:max-w-3/5 md:w-3/5 mx-auto pt-12 pb-20">
            <span className="mb-8">
              <h1 className="heading text-3xl md:text-4xl dark:text-white transition-all">
                Blog
              </h1>
              <p className="remarkable text-lg font-light mt-2 dark:text-white transition-all">
                {text.desc}
              </p>
            </span>
            <Search setResult={setResult} placeholder={text.placeholder} />
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
                        post.module.meta.title
                          .toLowerCase()
                          .includes(result) && (
                          <Post key={post.link} post={post} />
                        )
                    )}
            </main>
          </div>
        ))}
    </>
  );
}
