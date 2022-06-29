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
      <div className="flex flex-col pr-6 rounded transition-all">
        <figure className="h-44 md:h-52 md:max-h-52 rounded-xl transition-all">
          <img
            className="rounded-xl border-4 border-black dark:border-white"
            src={image}
            width={900}
            height={400}
          />
        </figure>
        <div className="flex flex-col py-4">
          <h4 className="heading text-xl text-gray-900 dark:text-gray-100 transition-all">
            {title}
          </h4>
          <span className="pt-2 md:pr-4">
            <p className="basic-text font-medium leading-relaxed text-gray-700 dark:text-gray-300 transition-all">
              {description}
            </p>
          </span>
        </div>
        <Link href={href}>
          <a>
            <p className="basic-text py-1 after:bg-black dark:after:bg-white underline-animation  font-semibold">
              {textLink} &rarr;
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
}
