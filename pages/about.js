import styled from "styled-components";
import { motion } from "framer-motion";

const Text = styled.p`
  margin-top: 1.2em;
  margin-bottom: 1.2em;
`;

export default function About() {
  return (
    <motion.div
      className="flex flex-col items-start text-left max-w-2xl mx-auto mb-16"
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
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        About Me
      </h1>
      <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
        <p>
          I'm Oliver Lopez, i'm really excited about this blog! Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Quisque neque elit,
          viverra vitae tortor non, malesuada condimentum mauris.
        </p>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          placerat mauris in elit posuere placerat. Suspendisse non dolor vel
          nunc vestibulum consequat.
        </Text>
        <Text>
          Ut sollicitudin, tellus pulvinar pulvinar porta, odio odio eleifend
          lorem, ac pretium massa diam nec augue. Ut in arcu nec velit finibus
          bibendum.
        </Text>
      </div>
      <h2 className="font-bold text-3xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
        Things I like
      </h2>
      <h3 className="font-medium mb-2 text-lg dark:text-white">
        Book(s) I'm reading
      </h3>
      <h3 className="font-medium mb-2 text-lg dark:text-white">
        Recently reads
      </h3>
      <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
        <h2 className="font-bold text-3xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
          My Tech Stack
        </h2>
        <Text className=" text-gray-600 dark:text-gray-400">
          This is the technology stack I use the most on my daily work
        </Text>
      </div>
    </motion.div>
  );
}
