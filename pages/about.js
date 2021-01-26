import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

// Custom styled components
const Text = styled.p`
  margin-top: 1.2em;
  margin-bottom: 1.2em;
`;

// List item component
const AppItem = ({ image, name, desc }) => (
  <>
    <a
      className="flex rounded-lg py-4 sm:p-4 sm:hover:bg-gray-100 sm:dark:hover:bg-gray-900"
      href="#"
    >
      <div>
        <Image
          className="rounded-lg"
          src={image}
          width={58}
          height={58}
          alt={"VS Code icon"}
        />
      </div>
      <div className="flex flex-col justify-center flex-1 pl-5 space-y-2">
        <div className="flex flex-col">
          <p className="font-semibold text-black dark:text-white">{name}</p>
          <p className="text-base font-normal text-gray-600 dark:text-gray-400">
            {desc}
          </p>
        </div>
      </div>
    </a>
  </>
);

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
      <div className="mb-4 prose leading-6 text-gray-600 dark:text-gray-400">
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
        Books
      </h2>
      <h3 className="font-medium mb-2 text-xl dark:text-white">Reading now</h3>
      <div className="flex justify-center py-4">
        <div>
          <Image
            src={"/static/images/books/jamstack_book.png"}
            width={165}
            height={235}
            alt={"A book"}
          />
        </div>
        <div className="ml-4">
          <Image
            src={"/static/images/books/genoma_cover.jpeg"}
            width={165}
            height={235}
            alt={"A book"}
          />
        </div>
      </div>
      <h3 className="font-medium mb-2 text-xl dark:text-white">
        Recently reads
      </h3>
      <div className="flex justify-center pt-4 pb-8">
        <div>
          <Image
            src={"/static/images/books/opinionated_guide.png"}
            width={165}
            height={235}
            alt={"A book"}
          />
        </div>
        <div className="ml-4">
          <Image
            src={"/static/images/books/the_one_thing.jpeg"}
            width={165}
            height={235}
            alt={"A book"}
          />
        </div>
        <div className="ml-4">
          <Image
            src={"/static/images/books/hooked_cover.jpeg"}
            width={165}
            height={235}
            alt={"A book"}
          />
        </div>
      </div>
      <div className="mb-4 prose leading-6 text-gray-600 dark:text-gray-400">
        <h2 className="font-bold text-3xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
          My Tech Stack
        </h2>
        <Text className=" text-gray-600 dark:text-gray-400">
          This is the technology stack I use the most on my daily work
        </Text>
      </div>
      <div className="flex flex-col">
        <AppItem
          image={"/static/images/logos/vscode.png"}
          name={"Visual Studio Code"}
          desc={"Best text editor for web developers and everyone else."}
        />
        <AppItem
          image={"/static/images/logos/figma_icon.png"}
          name={"Figma"}
          desc={
            "My favorite design tool by far, I use it for architechting UI's and create design systems."
          }
        />
        <AppItem
          image={"/static/images/logos/notion_icon.png"}
          name={"Notion"}
          desc={"The super app where I manage my workflow."}
        />
        <AppItem
          image={"/static/images/logos/nextjs_icon.jpeg"}
          name={"Next.js"}
          desc={"A powerful framework to build modern React websites."}
        />
        <AppItem
          image={"/static/images/logos/vercel_icon.jpeg"}
          name={"Vercel"}
          desc={
            "I started to deploy on Vercel and I need to say that the experience it's awesome. Just develop, ship and preview."
          }
        />
        <AppItem
          image={"/static/images/logos/telegram_x.png"}
          name={"Telegram"}
          desc={"My main and secure messaging client."}
        />
        <AppItem
          image={"/static/images/logos/iterm2.jpg"}
          name={"iTerm 2"}
          desc={
            "One of the fanciest terminal I've used, the first app you download when buy a mac."
          }
        />
      </div>
    </motion.div>
  );
}
