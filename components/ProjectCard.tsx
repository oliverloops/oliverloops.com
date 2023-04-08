import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function ProjectCard({
  image,
  title,
  href,
  textLink,
}: {
  image: string;
  title: string;
  href: string;
  textLink?: string;
}) {
  return (
    <div>
      <Link href={href}>
        <a>
          <Content image={image} title={title} />
        </a>
      </Link>
    </div>
  );
}

function Content({ image, title }: { image: string; title: string }){
 const [isHovered, setIsHovered] = React.useState(false);

  return(
    <motion.div 
      className="transition duration-300 flex flex-col mr-6 rounded-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ borderWidth: 5 }} className="transition duration-300 relative h-44 sm:h-52 md:h-52 rounded-3xl border-black dark:border-white">
        <Image
          className="rounded-3xl"
          src={image}
          layout="fill"
          sizes="100vw"
          priority
          alt="project-card"
        />
        <motion.div 
          className="flex justify-center items-end h-40 md:h-44"
          animate={{ translateY: isHovered ? -50 : 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="h-8 p-4 flex items-center bg-gray-50/80 dark:bg-slate-900/80 border-2 border-black dark:border-white absolute rounded-xl">
            <p className="text-sm font-bold text-slate-800 dark:text-slate-100">{title}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );                                                                  
}

export default ProjectCard;
