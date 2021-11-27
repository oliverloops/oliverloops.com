import Link from "next/link";
import Image from "next/image";
//UI components
import PostCard from "../components/PostCard";
import { posts } from "../getAllPosts";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col place-self-center md:max-w-3/5 md:w-3/5 pt-14 pb-12">
      <div className="flex justify-between py-4 mb-8">
        <div className="flex flex-col">
          <h1 className="font-bold text-4xl lg:text-5xl dark:text-white">
            Hi there, I'm Oliver{" "}
            <span
              className="hidden md:inline"
              role="img"
              aria-label="waving hand"
            >
              👋
            </span>
          </h1>
          <h3 className="font-medium text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl py-4 md:py-2">
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
        <div className="px-2 py-4">
          <Image
            width={128}
            height={128}
            className={"rounded-full border-2 border-blue-400"}
            src={"/static/images/me_outside.jpeg"}
            alt={"Oliver Lopez"}
          />
        </div>
      </div>
      <div className="mb-8">
        <h1 className="font-bold text-3xl tracking-normal lg:text-4xl dark:text-white">
          Recent Posts
        </h1>
        <div className="flex">
          {posts
            .slice(2)
            .reverse()
            .map((post: any) => (
              <PostCard key={post.link} post={post} />
            ))}
        </div>
        <Link href="/blog">
          <a>Read all posts &rarr;</a>
        </Link>
      </div>
      <div>
        <h1 className="py-4 font-bold tracking-tight text-3xl lg:text-4xl dark:text-white">
          Projects
        </h1>
        <div className="grid grid-cols-2">
          <ProjectCard
            image={"/static/images/portfolio/rango_web.png"}
            title={"Rango Creative Lab"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            href={"https://rango.dev"}
          />
          <ProjectCard
            image={"/static/images/portfolio/fitcloud_web.png"}
            title={"Fitcloud"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            href={"https://github.com/oliverloops/react-hider"}
          />
          <ProjectCard
            image={"/static/images/portfolio/natours_web.png"}
            title={"Comming Soon"}
            description={"This project is under construction"}
            href={"https://oliverloops.com/portfolio"}
          />
        </div>
      </div>
    </div>
  );
}
