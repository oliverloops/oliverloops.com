import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({
  image,
  title,
  description,
  href,
  textLink,
}: {
  image: string;
  title: string;
  description: string;
  href: string;
  textLink: string;
}) {
  return (
    <div className="mb-4 md:mb-8 my-4">
      <div className="transition duration-300 flex flex-col pr-6 rounded-3xl">
        <div className="transition duration-300 relative h-44 sm:h-52 md:h-52 rounded-2xl border-4 border-black dark:border-white">
          <Image
            className="rounded-lg"
            src={image}
            layout="fill"
            sizes="100vw"
            priority
            alt="project-card"
          />
        </div>
        <div className="flex flex-col py-4">
          <p className="transition duration-300 heading text-xl text-gray-900 dark:text-gray-100">
            {title}
          </p>
          <span className="pt-2 md:pr-4">
            <p className="transition duration-300 basic-text font-medium leading-relaxed text-gray-700 dark:text-gray-300">
              {description}
            </p>
          </span>
        </div>
        <Link href={href}>
          <a className="transition duration-150">
            <p className="basic-text py-1 after:bg-black dark:after:bg-white underline-animation font-semibold">
              {textLink} &rarr;
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
}
