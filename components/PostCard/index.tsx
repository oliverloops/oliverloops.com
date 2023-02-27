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
  const shadowFormula: string = `0.7rem 0.7rem #5EA5F7, 0.7rem 0.7rem 0 4px #000`;
  //const shadowExpandedFormula: string = `0.85rem 0.85rem #5EA5F7, 0.85rem 0.85rem 0 4px #000`;
  //const shadowCompressedFormula: string = `0.45rem 0.45rem #5EA5F7, 0.45rem 0.45rem 0 4px #000`;

  return (
    <div className="flex flex-col">
      <motion.div
        style={{ 
          borderRadius: 22,
          borderWidth: 5,
          zIndex: 1,
        }}
        className="blog-card h-40 transition duration-300 flex flex-col px-4 py-6 border-black dark:border-white rounded-xl"
      >
      <p className="transition duration-300 heading text-lg md:text-xl font-bold text-black ml-2 my-2">
        {meta.title}
      </p>
      <div className="flex justify-between items-end pt-2">
        <div className="flex w-full mx-2 justify-between text-gray-400">
          <div className="flex items-center">
            <FiEye
              className="text-black mr-1.5 transition-all"
              size={19}
            />
            <p className="basic-text transition duration-300 basic-text text-sm text-black font-semibold">
              343 Views
            </p>
          </div>
          <p style={{ fontFamily: "Telegraf" }} className="transition duration-300 basic-text text-sm text-black font-medium">
            {meta.date}
          </p>
        </div>
      </div>
    </motion.div>
    <motion.div 
      style={{ 
        width: 360,
        backgroundColor: "#5EA5F7",
        borderRadius: 22,
        borderWidth: 5,
        transform: "translate(18px, -140px)",
        zIndex: -1,
      }} 
      className="border-black dark:border-white h-40"
    >
    </motion.div>
  </div>
  );
};

export default PostCard;
