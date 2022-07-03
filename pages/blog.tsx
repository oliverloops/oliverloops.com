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
          <div className="flex flex-col justify-center items-start max-w-3xl w-full mx-auto py-8 md:py-4 pb-20">
            <span className="mb-8">
              <h1 className="heading text-3xl md:text-4xl dark:text-white">
                Blog
              </h1>
              <p className="remarkable text-lg font-light mt-2 dark:text-white">
                {text.desc}
              </p>
            </span>
            <Search setResult={setResult} placeholder={text.placeholder} />
            <main className="grid grid-cols-1 md:grid-cols-2 w-full gap-y-14 py-8">
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
