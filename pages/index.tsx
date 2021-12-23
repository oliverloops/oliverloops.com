import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
//UI components
import PostCard from "../components/PostCard";
import { posts } from "../getAllPosts";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col place-self-center md:max-w-3/5 md:w-3/5 md:pt-14 pb-12">
      <div className="flex flex-col-reverse md:flex-row justify-between md:py-4 mb-8">
        <div className="flex flex-col">
          <h1 className="heading font-bold text-3xl md:text-4xl lg:text-5xl  dark:text-white">
            Hi there, I'm Oliver{" "}
            <span
              className="hidden md:inline"
              role="img"
              aria-label="waving hand"
            >
              👋
            </span>
          </h1>
          <h3 className="remarkable md:text-lg  text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl py-4 pr-8 md:pr-0">
            I'm a frontend developer and an open source enthusiast. Welcome to
            my{" "}
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
        <figure className="w-28 h-28 md:w-36 md:h-36 relative px-2 my-4">
          <Image
            layout="fill"
            className="rounded-full"
            src={"/static/images/me_outside.jpeg"}
            alt={"Oliver Lopez"}
          />
        </figure>
      </div>
      <div className="mb-8">
        <h2 className="heading font-bold text-3xl lg:text-4xl dark:text-white">
          Recent Posts
        </h2>
        <div className="flex flex-col md:flex-row">
          {posts
            .slice(2)
            .reverse()
            .map((post: any) => (
              <PostCard key={post.link} post={post} />
            ))}
        </div>
        <Link href="/blog">
          <a>
            <p className="basic-text py-1 after:bg-black dark:after:bg-white underline-animation  text-lg font-medium">
              Read all posts &rarr;
            </p>
          </a>
        </Link>
      </div>
      <div>
        <h2 className="heading py-4 font-bold text-3xl lg:text-4xl dark:text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <ProjectCard
            image={"/static/images/portfolio/rango_web.png"}
            title={"Rango Creative Lab"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet."
            }
            href={"/showcase"}
          />
          <ProjectCard
            image={"/static/images/portfolio/fitcloud_web.png"}
            title={"Fitcloud"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet."
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
