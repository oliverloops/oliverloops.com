import { motion } from "framer-motion";
//UI components
import { Post } from "../components/Post";
import Image from "next/image";
import { posts } from "../getAllPosts";

export default function Home() {
  return (
    <div className="mx-auto">
      <motion.div
        className="flex flex-row"
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
      >
        <Image
          className="rounded-full"
          src="/me_cross.jpg"
          alt="Oliver Lopez"
          width="85"
          height="35"
        />

        <div className="flex flex-col px-8">
          <h1 className="font-extrabold sm:text-2xl  text-5xl dark:text-white">
            Hi, I'm Oliver Lopez
          </h1>
          <h3 className="text-base text-gray-400 py-2">
            I'm a software developer, rookie barista, chef amateur, writer and
            poetry lover.
          </h3>
        </div>
      </motion.div>
      <motion.div
        className="py-16"
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
      >
        <h1 className="font-extrabold text-4xl dark:text-white">
          Some Cool Blogs
        </h1>
        {posts.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </motion.div>
    </div>
  );
}
