import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
//UI components
import PostCard from "../components/PostCard";
import { posts } from "../getAllPosts";
import ProjectCard from "../components/ProjectCard";
//i18n
import homeTranslations from "./assets/homeTranslations.json";

export default function Home() {
  const { locale } = useRouter();

  return (
    <>
      {homeTranslations.home
        .filter((p) => p.locale === locale)
        .map((text) => (
          <div className="flex flex-col justify-center items-start max-w-3xl mx-auto pb-16">
            <div className="flex flex-col-reverse items-start sm:flex-row md:py-4 mb-8">
              <div className="flex flex-col pr-8">
                <h1 className="heading font-bold text-3xl md:text-4xl lg:text-5xl dark:text-white">
                  {text.title}{" "}
                  <div className="inline-block animate-handmove">
                    <span role="img" aria-label="waving hand">
                      👋
                    </span>
                  </div>
                </h1>
                <h3 className="remarkable md:text-md text-gray-500 dark:text-gray-400 my-2">
                  {text.position}
                </h3>
                <h3 className="remarkable md:text-md text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg mx-auto py-4 md:mr-8">
                  {text.desc_one}{" "}
                  <span className="text-green-500 dark:text-green-400">
                    {text.colored[0].digital_garden}
                  </span>{" "}
                  {text.desc_two}{" "}
                  <span className="text-blue-400 dark:text-blue-300">
                    {text.colored[0].product_dev}
                  </span>{" "}
                  {text.desc_three}{" "}
                  <span className="text-yellow-500 dark:text-yellow-400">
                    JavaScript
                  </span>{" "}
                  {text.desc_four}
                </h3>
              </div>
              <div className="w-28 h-28 md:w-36 md:h-36 relative my-6 md:ml-10 md:mr-auto md:my-0">
                <Image
                  layout="fill"
                  className="rounded-full"
                  src={"/static/images/me_outside.jpg"}
                  alt={"Oliver Lopez"}
                />
              </div>
            </div>
            <div className="mb-8">
              <h2 className="heading font-bold text-2xl md:text-3xl lg:text-4xl dark:text-white">
                {text.recent_posts}
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
                    {text.read_all} &rarr;
                  </p>
                </a>
              </Link>
            </div>
            <div>
              <h2 className="heading py-4 font-bold text-2xl md:text-3xl dark:text-white">
                {text.projects}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <ProjectCard
                  image={"/static/images/showcase/rango_cover.png"}
                  title={"Rango.dev"}
                  description={text.project_card[0].rango}
                  href={"/showcase/rango"}
                  textLink={text.textLink}
                />
                <ProjectCard
                  image={"/static/images/showcase/kluu/kluu_cover.png"}
                  title={"Kluu"}
                  description={text.project_card[0].kluu}
                  href={"/showcase/kluu"}
                  textLink={text.textLink}
                />
                <ProjectCard
                  image={"/static/images/showcase/kila/kila_cover.png"}
                  title={"Kila Environmental Services"}
                  description={text.project_card[0].kila}
                  href={"/showcase/kila"}
                  textLink={text.textLink}
                />
                <ProjectCard
                  image={"/static/images/showcase/airbnb/airbnb_cover.png"}
                  title={"Airbnb Clone"}
                  description={text.project_card[0].airbnb}
                  href={"/showcase/airbnb"}
                  textLink={text.textLink}
                />
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
