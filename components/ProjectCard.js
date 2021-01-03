import { motion } from "framer-motion";

export default function ProjectCard({ title, description, href, icon }) {
  return (
    <a className="mb-4" href={href}>
      <motion.div
        className="flex flex-col items-start hover:shadow-md border border-gray-300 dark:border-gray-700 rounded p-4"
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.965 }}
      >
        <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {title}
        </h4>
        <p className="leading-5 text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </motion.div>
    </a>
  );
}
