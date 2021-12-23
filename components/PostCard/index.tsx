import Link from "next/link";
import { motion } from "framer-motion";
import { FiEye } from "react-icons/fi";

const PostCard = ({ post }: { post: any }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <div className="p-8 pl-0">
      <Link href={"/blog" + link}>
        <a>
          <Content meta={meta} />
        </a>
      </Link>
    </div>
  );
};

const Content = ({ meta }: { meta: any }) => {
  //colored box-shadow and border style
  const shadowFormula: string = `0.65rem 0.65rem #5EA5F7, 0.65rem 0.65rem 0 4px #000`;
  const shadowExpandedFormula: string = `0.85rem 0.85rem #5EA5F7, 0.85rem 0.85rem 0 4px #000`;
  const shadowCompressedFormula: string = `0.45rem 0.45rem #5EA5F7, 0.45rem 0.45rem 0 4px #000`;

  return (
    <motion.div
      whileHover={{ boxShadow: shadowExpandedFormula }}
      whileTap={{ boxShadow: shadowCompressedFormula }}
      style={{ boxShadow: shadowFormula }}
      className="flex justify-center flex-col px-4 py-6 border-4 bg-white dark:bg-gray-900 border-black dark:border-white rounded-xl"
    >
      <p className="heading text-xl md:text-2xl font-bold text-blue-400 dark:text-blue-300 pr-2 pb-2 transition-all">
        {meta.title}
      </p>
      <div className="flex justify-between items-end pt-2">
        <div className="flex items-center">
          <FiEye
            className="text-black dark:text-gray-100 transition-all"
            size={21}
          />
          <p className="basic-text text-sm md:text-base text-black dark:text-gray-100 font-semibold ml-1.5 transition-all">
            0 Views
          </p>
        </div>
        <div className="flex flex-col text-gray-400">
          <p className="basic-text text-sm md:text-base text-black dark:text-gray-100 font-semibold transition-all">
            {meta.readTime} min read
          </p>
          <p className="basic-text text-sm md:text-base text-black  dark:text-gray-100  font-medium transition-all">
            {meta.date}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PostCard;
