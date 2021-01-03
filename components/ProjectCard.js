import Link from "next/link";

export default function ProjectCard({ title, description, href, icon }) {
  return (
    <Link href={href}>
      <a className="mb-4 hover:shadow">
        <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
          <p>Random text</p>
        </div>
      </a>
    </Link>
  );
}
