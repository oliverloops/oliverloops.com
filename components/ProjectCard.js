import Image from "next/image";
import Link from "next/Link";

export default function ProjectCard({ title, description, href }) {
  return (
    <div className="my-4">
      <div className="flex flex-col rounded p-4 transition-all">
        <Image
          className="rounded-xl"
          src={"/static/images/portfolio/fitcloud_web.png"}
          width={380}
          height={192}
        />
        <div className="flex flex-col py-4">
          <h4 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 transition-all">
            {title}
          </h4>
          <p className="leading-5 text-gray-700 dark:text-gray-300 transition-all">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
