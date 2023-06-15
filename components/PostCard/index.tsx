import Link from "next/link";
import { motion } from "framer-motion";
import { FiEye } from "react-icons/fi";

const PostCard = ({ post }: { post: any }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <div className="py-8 px-2 md:px-4 md:py-5 pl-0 w-full h-52 md:h-56 lg:h-64">
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
  //const shadowFormula: string = `0.7rem 0.7rem #5EA5F7, 0.7rem 0.7rem 0 4px #000`;
  //const shadowExpandedFormula: string = `0.85rem 0.85rem #5EA5F7, 0.85rem 0.85rem 0 4px #000`;
  //const shadowCompressedFormula: string = `0.45rem 0.45rem #5EA5F7, 0.45rem 0.45rem 0 4px #000`;

  return (
    <div className="flex flex-col">
      <motion.div
        whileTap={{ translateX: 18, translateY: 18 }}
        whileHover={{ translateX: 18, translateY: 18 }}
        transition={{ type: 'spring', duration: 0.1 }}
        style={{ 
          borderRadius: 22,
          borderWidth: 5,
          zIndex: 1,
        }}
        className="h-36 md:h-40 transition duration-300 flex flex-col px-4 py-4 md:py-6 bg-gray-50/90 dark:bg-slate-900/90 border-black dark:border-white rounded-xl"
      >
      <p className="transition duration-300 heading text-lg font-bold text-black dark:text-white ml-2 my-2">
        {meta.title}
      </p>
      <div className="flex justify-between items-end pt-2">
        <div className="flex w-full mx-2 justify-between text-gray-400">
          <div className="flex items-center">
            <FiEye
              className="text-black dark:text-white mr-1.5 transition-all"
              size={19}
            />
            <p className="basic-text transition duration-300 basic-text text-sm text-black dark:text-white font-medium">
              0 Views
            </p>
          </div>
          <p style={{ fontFamily: "Telegraf" }} className="transition duration-300 basic-text text-sm text-black dark:text-white font-medium">
            {meta.date}
          </p>
        </div>
      </div>
    </motion.div>
    <motion.div 
      style={{ 
        backgroundColor: meta.color,
        borderRadius: 22,
        borderWidth: 5,
        // transform: "translate(18px, -140px)",
        zIndex: -1,
      }} 
      className="translate-x-4 -translate-y-[7.95rem] md:translate-x-[18px] md:-translate-y-[140px] border-black dark:border-white w-80 md:w-auto h-36 md:h-40"
    >
    </motion.div>
  </div>
  );
};

export default PostCard;
