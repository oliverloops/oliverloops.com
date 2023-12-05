import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
//* UI components
import { posts } from "../getAllPosts";
import PostCard from "../components/PostCard";
import ProjectCard from "../components/ProjectCard";
import RepoCard from "../components/RepoCard";
//* i18n
import homeTranslations from "./assets/homeTranslations.json";

export default function Home() {
  const { locale } = useRouter();
  return (
    <>
      {homeTranslations.home
        .filter((p) => p.locale === locale)
        .map((text) => (
          <div className="flex flex-col justify-center items-start max-w-3xl mx-auto pb-16">
            <div className="sm:flex-row md:py-4 mb-4">
              <div className="avatar w-24 h-24 md:w-32 md:h-32 relative my-6 rounded-full border-4 border-black dark:border-white">
                <Image
                  priority
                  layout="fill"
                  sizes="100vw"
                  className="rounded-full"
                  src={"/static/images/me_outside.png"}
                  alt="Oliver Lopez"
                />
              </div>
              <div className="flex flex-col pr-8">
                <h1 className="heading font-bold text-3xl md:text-4xl lg:text-5xl dark:text-white">
                  {text.title}
                </h1>
                <p
                  style={{ fontFamily: "Telegraf", fontWeight: 600 }}
                  className="remarkable md:text-lg text-gray-700 dark:text-gray-400"
                >
                  {text.position}
                </p>
                <p className="remarkable md:text-md text-gray-500 dark:text-gray-400 md:w-9/12 py-4">
                  {text.desc_one}{" "}
                  <span className="text-green-500 dark:text-green-400">
                    {text.colored[0].digital_garden}
                  </span>{" "}
                  {text.desc_two}{" "}
                  <span className="text-yellow-500 dark:text-yellow-400">
                    JavaScript,
                  </span>{" "}
                  <span className="text-blue-500 dark:text-blue-400">
                    React
                  </span>{" "}
                  {text.desc_three}{" "}
                  <span className="text-orange-400">
                    {text.colored[0].journey}
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="heading font-bold text-2xl md:text-3xl lg:text-4xl dark:text-white">
                {text.recent_posts}
              </h2>
              <div className="flex flex-col md:flex-row">
                {posts
                  .slice(4)
                  .reverse()
                  .map((post: any) => (
                    <PostCard key={post.link} post={post} />
                  ))}
              </div>
              <Link href="/blog">
                <a>
                  <p className="basic-text my-4 lg:my-auto after:bg-black dark:after:bg-white underline-animation text-lg font-medium">
                    {text.read_all} &rarr;
                  </p>
                </a>
              </Link>
            </div>
            <div className="w-full mb-8">
              <h2 className="heading py-4 font-bold text-2xl md:text-3xl lg:text-4xl dark:text-white">
                {text.projects}
              </h2>
              <div className="grid gap-x-4 gap-y-10 grid-cols-1 md:grid-cols-2">
                <ProjectCard
                  image={"/static/images/showcase/medizona/medizona_cover.png"}
                  title={"Medizona"}
                  href={"/showcase/kila"}
                  textLink={text.textLink}
                />
                <ProjectCard
                  image={"/static/images/showcase/rango_cover.png"}
                  title={"Rango.dev"}
                  href={"/showcase/rango"}
                  textLink={text.textLink}
                />
                <ProjectCard
                  image={"/static/images/showcase/kluu/kluu_cover.png"}
                  title={"Kluu"}
                  href={"/showcase/kluu"}
                  textLink={text.textLink}
                />
                <ProjectCard
                  image={"/static/images/showcase/airbnb/airbnb_cover.png"}
                  title={"Airbnb Clone"}
                  href={"/showcase/airbnb"}
                  textLink={text.textLink}
                />
              </div>
            </div>
            <div className="my-4">
              <h2 className="heading py-4 font-bold text-2xl md:text-3xl lg:text-4xl dark:text-white">
                {text.open_source_work}
              </h2>
              <div className="grid gap-6 md:gap-x-4 md:gap-y-8 grid-cols-1 md:grid-cols-2 my-1">
                <RepoCard
                  url={"https://github.com/aidenybai/million"}
                  image={"/static/images/logos/lion_emoji.png"}
                  title={"Million.js"}
                  category="React"
                  color="#B177FB"
                />
                <RepoCard
                  url={
                    "https://github.com/dohooo/react-native-reanimated-carousel"
                  }
                  image={"/static/images/logos/carousel_horse.png"}
                  title={"Reanimated Carousel"}
                  category="React Native"
                  color="#F69032"
                />
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
