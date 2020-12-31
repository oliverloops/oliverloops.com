import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
          translateX: -800,
        },
        pageAnimate: {
          opacity: 1,
          translateX: 0,
        },
      }}
    >
      <h1 className="font-bold text-3xl">Hi, I'm Oliver Lopez</h1>
      <h3 className="text-gray-500">
        I'm a software developer, rookie barista, chef amateur, writer and
        poetry lover.
      </h3>
    </motion.div>
  );
}
