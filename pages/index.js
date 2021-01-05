import { motion } from "framer-motion";
//UI components
import { Post } from "../components/Post";
import { posts } from "../getAllPosts";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="mx-auto">
      <motion.div
        className="flex flex-col items-center"
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
            style={{ width: "64px", height: "64px" }}
            className="rounded-full"
            src="/me_cross.jpg"
            alt="Oliver Lopez"
          />
        </div>

        <div className="flex flex-col py-4">
          <h1 className="font-extrabold text-2xl lg:text-5xl dark:text-white">
            Hi there!, I'm Oliver Lopez{" "}
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </h1>
          <h3 className="font-medium text-md text-gray-500 dark:text-gray-400  max-w-xl py-2">
            I'm a software developer, rookie barista, and writer. Welcome to my
            personal space on the internet where you can find{" "}
            <span style={{ color: "#F7E01E" }}>JavaScript</span>,{" "}
            <span style={{ color: "#52D8FF" }}>React</span> and my{" "}
            <span style={{ color: "#32C119" }}>entrepreneurial adventures</span>{" "}
            related blog posts.
          </h3>
        </div>
      </motion.div>
      <motion.div
        className="pt-6 pb-4"
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
        <h1 className="font-extrabold text-2xl sm:text-4xl dark:text-white">
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
        <h1 className="py-4 font-extrabold text-2xl sm:text-4xl dark:text-white">
          Projects
        </h1>
        <ProjectCard
          icon={"hat"}
          title={"React Hider"}
          description={"Conditional Rendering Made Easy"}
          href={"https://github.com/oliverloops/react-hider"}
        />
        <ProjectCard
          icon={"cloud"}
          title={"Fitcloud.mx"}
          description={"Fitness sessions on demand"}
          href={"https://fitcloud.mx/"}
        />
        <ProjectCard
          icon={"fire"}
          title={"Comming Soon"}
          description={"This project is under construction"}
          href={"https://oliverloops.com/portfolio"}
        />
      </motion.div>
    </div>
  );
}
