//UI components
import { Post } from "../components/Post";
import { posts } from "../getAllPosts";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col place-self-center">
      <div className="flex bg-red-400">
        <div className="flex flex-col py-4">
          <h1 className="font-bold text-4xl tracking-normal lg:text-5xl dark:text-white">
            Hi there, I'm Oliver{" "}
            <span
              className="hidden md:inline"
              role="img"
              aria-label="waving hand"
            >
              👋
            </span>
          </h1>
          <h3 className="font-medium text-lg text-gray-500 dark:text-gray-400  max-w-xl py-4 md:py-2">
            I'm a frontend developer, open source enthusiast and a casual tech
            writer. Welcome to my{" "}
            <span className="text-green-500 dark:text-green-400">
              digital garden
            </span>{" "}
            where you can find some of my thoughts and blog posts related to{" "}
            <span className="text-yellow-400 dark:text-yellow-300">
              JavaScript
            </span>
            , <span className="text-blue-400">React</span> and experiments with{" "}
            <span className="text-gray-900 dark:text-gray-100">Next.js</span>.
          </h3>
        </div>
        <img
          style={{ width: "128px", height: "128px" }}
          className="rounded-full border-2 border-blue-400"
          src="/static/images/me_outside.jpg"
          alt="Oliver Lopez"
        />
      </div>
      <div>
        <h1 className="font-bold text-3xl tracking-normal lg:text-4xl dark:text-white">
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
