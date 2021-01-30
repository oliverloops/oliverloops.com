import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

// Custom styled components
const Text = styled.p`
  margin-top: 1.2em;
  margin-bottom: 1.2em;
`;

// List item component
const AppItem = ({ url, image, name, desc }) => (
  <>
    <a
      className="flex rounded-lg py-4 sm:p-4 sm:hover:bg-gray-100 sm:dark:hover:bg-gray-900"
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
          Hi again!, I'm Oliver and I'm a software developer, rookie barista and
          an enthusiast tech writer. I'm a part-time freelance developer and
          full-time information systems student.
        </p>
        <Text>
          The core idea of this I want it to share what I knwo and learn through
          blog posts in order to help other developers succeed in their learning
          paths.
        </Text>
        <Text>
          I'm currently living on Guanajuato, Mexico and I usually spend my time
          exploring outsides, learning new skills, reading new books and playing
          videogames. Other topics I enjoy rather than software are science,
          entrepreuneurship, genomics and everything about coffee.
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
          url={"https://www.netlify.com/"}
          image={"/static/images/logos/netlify_icon.png"}
          name={"Netlify"}
          desc={
            "I love to deploy on Netlify, you can just deploy in seconds it's really insane."
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
          url={
            "https://play.google.com/store/apps/details?id=org.thunderdog.challegram&hl=en&gl=US"
          }
          image={"/static/images/logos/telegram_x.png"}
          name={"Telegram X"}
          desc={"My favorite and secure messaging client but powered by 10x."}
        />
        <AppItem
          url={"https://www.tunnelbear.com/"}
          image={"/static/images/logos/tunnel_bear.png"}
          name={"Tunnelbear"}
          desc={"Sometimes I need a VPN, Tunnelbear simply does the job."}
        />
        <AppItem
          url={"https://vercel.com/"}
          image={"/static/images/logos/vercel_icon.jpeg"}
          name={"Vercel"}
          desc={
            "I recently started to deploy on Vercel and the experience it's awesome. Just develop, ship and preview."
          }
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
    </motion.div>
  );
}
