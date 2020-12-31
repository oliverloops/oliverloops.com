import { motion } from "framer-motion";
//UI components
import { Post } from "../components/Post";
import { posts } from "../getAllPosts";

export default function Home() {
  return (
    <>
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
      >
        <h1 className="font-extrabold text-5xl dark:text-white">
          Hi, I'm Oliver Lopez
        </h1>
        <h3 className="text-base text-gray-400 py-2">
          I'm a software developer, rookie barista, chef amateur, writer and
          poetry lover.
        </h3>
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
        <h1 className="font-extrabold text-4xl dark:text-white">Cool Blogs</h1>
        {posts.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </motion.div>
    </>
  );
}
