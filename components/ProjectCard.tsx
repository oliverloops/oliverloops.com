import Image from "next/image";
import Link from "next/link";

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
    <div className="mb-4 md:mb-0 md:my-4">
      <div className="flex flex-col rounded p-4 transition-all">
        <Image
          className="rounded-lg md:rounded-xl"
          src={image}
          width={370}
          height={190}
        />
        <div className="flex flex-col py-4">
          <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 transition-all">
            {title}
          </h4>
          <span className="pt-2 md:pr-4">
            <p className="font-medium leading-relaxed text-gray-700 dark:text-gray-300 transition-all">
              {description}
            </p>
          </span>
        </div>
        <Link href={href}>
          <a>
            <p className="font-medium">View Project &rarr;</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
