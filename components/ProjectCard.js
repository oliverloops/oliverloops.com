import { motion } from "framer-motion";
import { AiTwotoneFire } from "react-icons/ai";

export default function ProjectCard({ title, description, href, icon }) {
  return (
    <div className="mb-4">
      <a href={href}>
        <motion.div
          className="flex items-center hover:shadow-md border border-gray-300 dark:border-gray-700 rounded p-4"
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.965 }}
        >
          <AiTwotoneFire
            className="dark:text-gray-100"
            style={{ fontSize: "1.6em" }}
          />
          <div className="flex flex-col px-4">
            <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {title}
            </h4>
            <p className="leading-5 text-gray-700 dark:text-gray-300">
              {description}
            </p>
          </div>
        </motion.div>
      </a>
    </div>
  );
}
