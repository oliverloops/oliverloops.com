import { motion } from "framer-motion";
//UI components
import { Post } from "../components/Post";
import { posts } from "../getAllPosts";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="mx-auto">
      <div>
        <div className="flex justify-start">
          <img
            style={{ width: "72px", height: "72px" }}
            className="rounded-full border-2 border-blue-400"
            src="/static/images/me_cross.jpg"
            alt="Oliver Lopez"
          />
        </div>

        <div className="flex flex-col py-4">
          <h1 className="font-bold text-3xl tracking-tight lg:text-4xl dark:text-white">
            Hi there!, I'm Oliver{" "}
            <span
              className="hidden md:inline"
              role="img"
              aria-label="waving hand"
            >
              👋
            </span>
          </h1>
          <h3 className="font-medium text-md text-gray-500 dark:text-gray-400  max-w-xl py-4 md:py-2">
            I'm a software developer, rookie barista, and a tech writer. Welcome
            to my personal space on the internet where you can find{" "}
            <span style={{ color: "#F7E01E" }}>JavaScript</span>,{" "}
            <span style={{ color: "#52D8FF" }}>React</span> and my{" "}
            <span style={{ color: "#32C119" }}>entrepreneurial adventures</span>{" "}
            related blog posts.
          </h3>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-3xl tracking-tight lg:text-4xl dark:text-white">
          Some Cool Blogs!
        </h1>
        {posts
          .slice()
          .reverse()
          .map((post) => (
            <Post key={post.link} post={post} />
          ))}
      </div>
      <div>
        <h1 className="py-4 font-bold tracking-tight text-3xl lg:text-4xl dark:text-white">
          Projects
        </h1>
        <ProjectCard
          icon={"cube"}
          title={"Rango Creative Lab"}
          description={"JAMstack based solutions"}
          href={"https://rango.dev"}
        />
        <ProjectCard
          icon={"hat"}
          title={"React Hider"}
          description={"Conditional Rendering Made Easy"}
          href={"https://github.com/oliverloops/react-hider"}
        />
        <ProjectCard
          icon={"fire"}
          title={"Comming Soon"}
          description={"This project is under construction"}
          href={"https://oliverloops.com/portfolio"}
        />
      </div>
    </div>
  );
}
