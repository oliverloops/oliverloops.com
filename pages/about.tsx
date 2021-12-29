import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

// Custom styled components
const Text = styled.p`
  margin-top: 1.2em;
  margin-bottom: 1.2em;
`;

// List item component
const AppItem = ({
  url,
  image,
  name,
  desc,
}: {
  url: string;
  image: string;
  name: string;
  desc: string;
}) => (
  <>
    <a
      className="flex rounded-lg py-2 px-2 md:p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
      href={url}
    >
      <div>
        <Image
          className="rounded-lg"
          src={image}
          width={56}
          height={56}
          alt={"App icon"}
        />
      </div>
      <div className="flex flex-col flex-1 pl-5">
        <div className="flex flex-col">
          <p className="font-semibold text-black dark:text-white">{name}</p>
          <p className="text-base font-normal text-gray-600 dark:text-gray-400 mr-4">
            {desc}
          </p>
        </div>
      </div>
    </a>
  </>
);

export default function About() {
  return (
    <div className="flex flex-col items-start text-left md:max-w-3/5 md:w-3/5 mx-auto my-16">
      <h1 className="heading font-bold text-3xl md:text-4xl mb-4 text-black dark:text-white">
        About Me
      </h1>
      <div className="mb-4 mr-12 text-justify leading-6 text-gray-600 dark:text-gray-400">
        <p>
          I'm a frontend developer, rookie barista and an enthusiast tech
          writer. I'm a part-time freelance web developer and full-time
          information systems student.
        </p>
        <Text>
          I want it to share everything I know, learn and discover through blog
          posts in order to help other developers succeed on their learning
          paths and I will document my entrepreneurial adventures and life
          experiences around software.
        </Text>
        <Text>
          I usually spend my time exploring outsides, learning new skills,
          reading new books and playing videogames. Other topics I enjoy rather
          than software are science, entrepreuneurship, genomics and everything
          about coffee.
        </Text>
      </div>
      <h2 className="font-bold text-3xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
        Books
      </h2>
      <h3 className="basic-text font-semibold mb-2 text-2xl dark:text-white">
        Reading now
      </h3>
      <div className="flex justify-center py-4">
        <figure>
          <Image
            className="rounded-lg"
            src={"/static/images/books/atomic_design.png"}
            width={185}
            height={285}
            alt={"A book"}
          />
          <figcaption>
            <p className="text-lg md:text-xl font-semibold">Atomic Desing</p>
            <p className="text-md md:text-lg text-gray-400">Brad Frost</p>
          </figcaption>
        </figure>
        <div className="ml-8">
          <figure>
            <Image
              className="rounded-lg"
              src={"/static/images/books/working_in_public_book.jpeg"}
              width={190}
              height={285}
              alt={"A book"}
            />
            <figcaption>
              <p className="text-lg md:text-xl font-semibold">
                Working in Public
              </p>
              <p className="text-md md:text-lg text-gray-400">Nadia Eghbal</p>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="mt-8 mb-4 prose leading-6 text-gray-600 dark:text-gray-400">
        <h2 className="font-bold text-3xl md:text-3xl mb-4 text-black dark:text-white">
          My Tech Stack
        </h2>
        <Text className=" text-gray-600 dark:text-gray-400">
          This is the technology stack I use the most on my daily work
        </Text>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <AppItem
          url={"http://vanilla-js.com/"}
          image={"/static/images/logos/javascript_logo.png"}
          name={"JavaScript"}
          desc={"The language I love and hate the most."}
        />
        <AppItem
          url={"https://www.typescriptlang.org/"}
          image={"/static/images/logos/typescript_logo.png"}
          name={"TypeScript"}
          desc={"Is literally JavaScript with syntax for types."}
        />
        <AppItem
          url={"https://reactjs.org/"}
          image={"/static/images/logos/react_icon.png"}
          name={"React"}
          desc={"The JavaScript library for building user interfaces."}
        />
        <AppItem
          url={"https://reactnative.dev/"}
          image={"/static/images/logos/react_native_logo.png"}
          name={"React Native"}
          desc={"Create native apps for Android and iOS using React."}
        />
        <AppItem
          url={"https://www.solidjs.com/"}
          image={"/static/images/logos/solidjs_logo.jpeg"}
          name={"Solid.js"}
          desc={
            "Simple and performant reactivity for building user interfaces."
          }
        />
        <AppItem
          url={"https://tailwindcss.com/"}
          image={"/static/images/logos/tailwind.png"}
          name={"Tailwind CSS"}
          desc={"Rapidly build modern websites without ever leaving your HTML."}
        />
        <AppItem
          url={"https://nextjs.org/"}
          image={"/static/images/logos/nextjs_logo.png"}
          name={"Next.js"}
          desc={"A powerful framework to build modern React websites."}
        />
        <AppItem
          url={"https://prisma.io/"}
          image={"/static/images/logos/prisma_icon.png"}
          name={"Prisma"}
          desc={"Next-generation Node.js and TypeScript ORM."}
        />
        <AppItem
          url={"https://nodejs.org/"}
          image={"/static/images/logos/node_icon.png"}
          name={"Node.js"}
          desc={"The JavaScript runtime built on Chrome's V8 engine."}
        />
        <AppItem
          url={"https://graphql.org/"}
          image={"/static/images/logos/graphql_logo.png"}
          name={"GraphQL"}
          desc={"A query language for your API."}
        />
        <AppItem
          url={"https://planetscale.com/"}
          image={"/static/images/logos/planet_scale_logo.png"}
          name={"Planetscale"}
          desc={"The database for developers."}
        />
        <AppItem
          url={"https://www.mongodb.com/"}
          image={"/static/images/logos/mongo_db_logo.png"}
          name={"MongoDB"}
          desc={"A document based NoSQL database."}
        />
        <AppItem
          url={"https://vercel.com/"}
          image={"/static/images/logos/vercel_icon.jpeg"}
          name={"Vercel"}
          desc={"Develop. Preview. Ship."}
        />
        <AppItem
          url={"https://www.netlify.com/"}
          image={"/static/images/logos/netlify_icon.png"}
          name={"Netlify"}
          desc={"Build, deploy and scale modern web projects."}
        />
      </div>
    </div>
  );
}
