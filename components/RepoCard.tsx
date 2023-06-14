import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import image from "../public/static/images/react_logo.png";

interface Props {
    url: string;
    image: string;
    title: string;
    category: string;
}

function RepoCard({ url, image, title, category  }: Props){
    return(
        <Link href={url}>
            <a>
                <Content image={image} title={title} category={category} />
            </a>
        </Link>
    );
}

function Content({ image, title, category }: { image: string, title: string; category: string }){
    return(
        <div className="transition duration-300 mr-6 rounded-3xl">
            <div 
                className="flex p-2 transition duration-300 h-20 md:h-20 rounded-3xl border-4 border-black dark:border-white"
            >
               <motion.div
                    whileHover={{ translateX: 5, translateY: 5 }}
                    className="w-12 h-12 py-2 p-1.5 bg-gray-50/90 dark:bg-slate-900/90 rounded-xl border-2 border-black dark:border-white">
                <Image
                    src={image}
                    width={category === "React" ? 50 : 47}
                    height={category === "React" ? 45 : 47}
                    priority
                    alt="repository-logo"
                />
               </motion.div>
               <div
                style={{ 
                    backgroundColor: "#5EA5F7",
                    transform: "translate(-42px, 5px)",
                    zIndex: -1,
                }} 
                className="w-12 h-12 border-2 rounded-xl border-black dark:border-white"
               >
               </div>
                <div style={{ transform: "translateX(-30px)" }} className="w-52 md:w-60 py-1">
                    <p className="text-lg font-bold text-slate-700 dark:text-slate-200">{title}</p>
                    <p className="text-sm font-bold text-zinc-400 dark:text-zinc-400">{category}</p>
                </div>
            </div>
        </div>
    );
}

export default RepoCard;