import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function RepoCard(){
    return(
        <motion.div 
            className="transition duration-300 flex flex-col mr-6 rounded-3xl"
        >
        <div style={{ borderWidth: 5 }} className="transition duration-300 relative h-20 md:h-20 rounded-3xl border-black dark:border-white">
          {/* <Image
            className="rounded-3xl"
            src={image}
            layout="fill"
            sizes="100vw"
            priority
            alt="project-card"
          /> */}
            <div>
              <p className="text-lg font-bold">Project title</p>
              <p className="text-sm font-bold">Category</p>
            </div>
        </div>
        </motion.div>
    );
}

export default RepoCard;