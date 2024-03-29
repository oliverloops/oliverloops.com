import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

//i18n
import aboutTranslations from "./assets/aboutTranslations.json";

// Custom styled components
const Text = styled.p`
  margin-top: 1.2em;
  margin-bottom: 1.2em;
  font-size: 16px;
`;

// List item component
const AppItem = ({
  url,
  image,
  name,
  desc,
  color,
  width,
  height,
}: {
  url: string;
  image: string;
  name: string;
  desc: string;
  color: string;
  width: number;
  height: number;
}) => {
  return (
    <div className="transition duration-300 md:mr-6 rounded-3xl">
      <a
        href={url}
        className="flex p-2 transition duration-300 rounded-3xl border-4 border-black dark:border-white"
      >
        <motion.div
          whileHover={{ translateX: 5, translateY: 5 }}
          className="w-12 h-12 bg-gray-50/90 dark:bg-slate-900/90 rounded-xl border-2 border-black dark:border-white"
        >
          <Image
            className="rounded-lg"
            src={image}
            width={width}
            height={height}
            priority
            alt={`${name} logo`}
          />
        </motion.div>
        <div
          style={{
            backgroundColor: color,
            transform: "translate(-42px, 5px)",
            zIndex: -1,
          }}
          className="w-12 h-12 border-2 rounded-xl border-black dark:border-white"
        ></div>
        <div
          style={{ transform: "translateX(-30px)" }}
          className="w-52 md:w-60 py-1"
        >
          <p className="text-lg font-bold text-slate-700 dark:text-slate-200">
            {name}
          </p>
          <p className="text-sm text-zinc-400 dark:text-zinc-400">{desc}</p>
        </div>
      </a>
    </div>
  );
};

export default function About() {
  const { locale } = useRouter();

  return (
    <>
      {aboutTranslations.about
        .filter((p) => p.locale === locale)
        .map((text) => (
          <div className="flex flex-col justify-center items-start max-w-3xl w-full md:mx-auto text-left py-8 md:py-4 pb-20">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col w-full md:w-1/2">
                <h1 className="heading font-bold text-3xl md:text-4xl mb-4 text-black dark:text-white">
                  {text.title}
                </h1>
                <div className="mb-4 md:mr-12 text-justify leading-6 text-gray-600 dark:text-gray-400">
                  <p className="text-md">
                    {text.desc[0].p1}{" "}
                    <a
                      className="text-blue-600 font-semibold underline dark:text-blue-300"
                      href="https://medizona.com.mx"
                    >
                      Medizona
                    </a>
                    .
                  </p>
                  <Text>{text.desc[0].p2}</Text>
                  <Text>{text.desc[0].p3}</Text>
                </div>
              </div>
              <div className="flex flex-col w-full md:w-1/2">
                <h2 className="font-bold text-3xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
                  {text.reading}
                </h2>
                <div className="flex justify-center py-4">
                  <div className="w-full md:w-1/2 md:max-w-1/2 ml-8">
                    <figure>
                      <Image
                        className="rounded-lg"
                        src={"/static/images/books/company_of_one_cover.jpg"}
                        width={140}
                        height={200}
                        alt={"A book"}
                      />
                      <figcaption className="py-2">
                        <p className="text-sm md:text-lg font-semibold">
                          Company of One
                        </p>
                        <p className="text-sm md:text-lg text-gray-400">
                          Paul Jarvis
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="w-full md:w-1/2 max-w-1/2">
                    <figure>
                      <Image
                        className="rounded-lg"
                        src={
                          "/static/images/books/design_for_developers_cover.png"
                        }
                        width={140}
                        height={190}
                        alt={"A book"}
                      />
                    </figure>
                    <figcaption className="py-2">
                      <p className="text-sm md:text-lg font-semibold">
                        Design for Developers
                      </p>
                      <p className="text-sm md:text-lg text-gray-400">
                        Stephanie Stimac
                      </p>
                    </figcaption>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 mb-4 prose leading-6 text-gray-600 dark:text-gray-400">
              <h2 className="font-bold text-3xl md:text-3xl mb-4 text-black dark:text-white">
                {text.tech}
              </h2>
              <Text className=" text-gray-600 dark:text-gray-400">
                {text.techsub}
              </Text>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-8">
              <AppItem
                url={"https://www.typescriptlang.org/"}
                image={"/static/images/logos/typescript_logo.png"}
                name={"TypeScript"}
                desc={text.stack[0].typescript}
                color={"#5EA5F7"}
                width={48}
                height={49}
              />
              <AppItem
                url={"http://vanilla-js.com/"}
                image={"/static/images/logos/javascript_logo.png"}
                name={"JavaScript"}
                desc={text.stack[0].javascript}
                color={"#F3CB56"}
                width={48}
                height={49}
              />
              <AppItem
                url={"https://react.dev/"}
                image={"/static/images/logos/react_icon.png"}
                name={"React"}
                desc={text.stack[0].react}
                color={"#5EA5F7"}
                width={48}
                height={49}
              />
              <AppItem
                url={"https://reactnative.dev/"}
                image={"/static/images/logos/react_native_logo.png"}
                name={"React Native"}
                desc={text.stack[0].react_native}
                color={"#F69032"}
                width={48}
                height={49}
              />
              <AppItem
                url={"https://expo.dev/"}
                image={"/static/images/logos/expo_logo.png"}
                name={"Expo"}
                desc={text.stack[0].expo}
                color={"#FC7E7E"}
                width={48}
                height={49}
              />
              <AppItem
                url={"https://nodejs.org/"}
                image={"/static/images/logos/node_icon.png"}
                name={"Node.js"}
                desc={text.stack[0].node}
                color={"#2DD39C"}
                width={48}
                height={49}
              />
              <AppItem
                url={"https://www.figma.com/"}
                image={"/static/images/logos/figma_logo.webp"}
                name={"Figma"}
                desc={text.stack[0].figma}
                color={"#B177FB"}
                width={60}
                height={60}
              />
              <AppItem
                url={"https://code.visualstudio.com/"}
                image={"/static/images/logos/vscode_logo.png"}
                name={"VS Code"}
                desc={text.stack[0].vscode}
                color={"#5EA5F7"}
                width={47}
                height={49}
              />
              <AppItem
                url={"https://vercel.com/"}
                image={"/static/images/logos/vercel_logo.png"}
                name={"Vercel"}
                desc={text.stack[0].vercel}
                color={"#444"}
                width={48}
                height={49}
              />
            </div>
          </div>
        ))}
    </>
  );
}
