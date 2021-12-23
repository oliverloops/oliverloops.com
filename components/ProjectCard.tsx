import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({
  image,
  title,
  description,
  href,
}: {
  image: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="mb-4 md:mb-8 md:my-4">
      <div className="flex flex-col pr-6 rounded transition-all">
        <motion.figure
          whileHover={{ scale: 1.025 }}
          className="h-44 md:h-52 relative border-4 border-black dark:border-white rounded-xl transition-all"
        >
          <Image
            className="rounded-lg md:rounded-lg"
            src={image}
            layout="fill"
          />
        </motion.figure>
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
            <p className="basic-text font-semibold">View Project &rarr;</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
