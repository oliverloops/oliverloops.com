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
      className="flex rounded-lg py-4 p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
      href={url}
    >
      <div>
        <Image
          className="rounded-xl"
          src={image}
          width={58}
          height={58}
          alt={"App icon"}
        />
      </div>
      <div className="flex flex-col justify-center flex-1 pl-5 space-y-2">
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
      <div className="flex flex-col">
        <AppItem
          url={"https://brave.com/"}
          image={"/static/images/logos/brave_icon.png"}
          name={"Brave Browser"}
          desc={
            "The private browser, I even have a crypto BAT wallet and can jump between search engines like Google and DuckDuckGo."
          }
        />
        <AppItem
          url={"https://www.duetdisplay.com/"}
          image={"/static/images/logos/duet_icon.jpeg"}
          name={"Duet Display"}
          desc={
            "A cool display sharing app to use when I'm not at home and because I have an old iPad not compatible with sidecar."
          }
        />
        <AppItem
          url={"https://www.figma.com/"}
          image={"/static/images/logos/figma_icon.png"}
          name={"Figma"}
          desc={
            "My favorite design tool by far, I use it for architechting UI's and create design systems."
          }
        />
        <AppItem
          url={"https://iterm2.com/"}
          image={"/static/images/logos/iterm2.jpeg"}
          name={"iTerm 2"}
          desc={
            "It's the best macOS terminal replacement and one of the fanciest terminal I've used, the first app you must download when you get a mac."
          }
        />
        <AppItem
          url={"https://vercel.com/"}
          image={"/static/images/logos/vercel_icon.jpeg"}
          name={"Vercel"}
          desc={
            "I love to deploy on Vercel, you can just deploy in seconds, it's really insane and the DX it's awesome. Just develop, ship and preview."
          }
        />
        <AppItem
          url={"https://nextjs.org/"}
          image={"/static/images/logos/nextjs_icon.png"}
          name={"Next.js"}
          desc={"A powerful framework to build modern React websites."}
        />
        <AppItem
          url={"https://nodejs.org/"}
          image={"/static/images/logos/node_icon.png"}
          name={"Node.js"}
          desc={"Oh My Node!, I'm really involved with node.js environment."}
        />
        <AppItem
          url={"https://www.notion.so/"}
          image={"/static/images/logos/notion_icon.png"}
          name={"Notion"}
          desc={"The super app where I manage my life and workflow."}
        />
        <AppItem
          url={"https://prisma.io/"}
          image={"/static/images/logos/prisma_icon.png"}
          name={"Prisma"}
          desc={
            "My default SQL based ORM, it helps me a lot with database building and modeling and it's really fast."
          }
        />
        <AppItem
          url={"https://protonmail.com/"}
          image={"/static/images/logos/protonmail_icon.png"}
          name={"Protonmail"}
          desc={"A super secure email client and my favorite one."}
        />
        <AppItem
          url={"https://reactjs.org/"}
          image={"/static/images/logos/react_icon.png"}
          name={"React"}
          desc={
            "The JavaScript Framework!. Naa, I'm joking it's just a pretty cool library ;)."
          }
        />
        <AppItem
          url={"https://tailwindcss.com/"}
          image={"/static/images/logos/tailwind.png"}
          name={"Tailwind CSS"}
          desc={
            "A compositional CSS framework that increases developer experiece. It’s like writing CSS on steroids."
          }
        />
        <AppItem
          url={"https://www.netlify.com/"}
          image={"/static/images/logos/netlify_icon.png"}
          name={"Netlify"}
          desc={
            "Netlify is an awesome serverless hosting provider, it makes you really productive and let you deploy fast as hell."
          }
        />
        <AppItem
          url={
            "https://play.google.com/store/apps/details?id=org.thunderdog.challegram&hl=en&gl=US"
          }
          image={"/static/images/logos/telegram.jpg"}
          name={"Telegram"}
          desc={"My favorite, powerfull and secure messaging client."}
        />
        <AppItem
          url={"https://www.tunnelbear.com/"}
          image={"/static/images/logos/tunnel_bear.png"}
          name={"Tunnelbear"}
          desc={"Sometimes I need a VPN, Tunnelbear simply does the job."}
        />
        <AppItem
          url={"https://code.visualstudio.com/"}
          image={"/static/images/logos/vscode.png"}
          name={"Visual Studio Code"}
          desc={
            "Best text editor for web developers and one of the best for everyone else."
          }
        />
      </div>
    </div>
  );
}
