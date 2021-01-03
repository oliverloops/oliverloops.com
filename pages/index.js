import { motion } from "framer-motion";
//UI components
import { Post } from "../components/Post";
import ProjectCard from "../components/ProjectCard";
import { posts } from "../getAllPosts";

export default function Home() {
  return (
    <div className="mx-auto">
      <motion.div
        className="flex flex-row items-center"
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
        <div className="rounded-full border-2 border-blue-400">
          <img
            style={{ width: "82px", height: "82px" }}
            className="rounded-full"
            src="/me_cross.jpg"
            alt="Oliver Lopez"
          />
        </div>

        <div className="flex flex-col px-8">
          <h1 className="font-extrabold sm:text-2xl  text-5xl dark:text-white">
            Hi, I'm Oliver Lopez
          </h1>
          <h3 className="text-base text-gray-400 py-2">
            I'm a software developer, React/Node enthusiast rookie barista,{" "}
            <br />
            chef amateur, writer and poetry lover and sometimes writer.
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
          Some Cool Blogs!
        </h1>
        {posts.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </motion.div>
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
        <h1 className="py-4 font-extrabold text-4xl dark:text-white">
          Projects
        </h1>
        <ProjectCard
          title={"Random One"}
          description={"A random custom description"}
          href={"/"}
        />
        <ProjectCard
          title={"Random Two"}
          description={"A random custom description"}
          href={"/"}
        />
        <ProjectCard
          title={"Random Three"}
          description={"A random custom description"}
          href={"/"}
        />
      </motion.div>
    </div>
  );
}
