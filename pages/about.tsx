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
  color
}: {
  url: string;
  image: string;
  name: string;
  desc: string;
  color: string;
}) => {

  return (
    <div className="transition duration-300 mr-6 rounded-3xl">
    <a 
      href={url}
      className="flex p-2 transition duration-300 rounded-3xl border-4 border-black dark:border-white"
    >
       <motion.div
            whileHover={{ translateX: 5, translateY: 5 }}
            className="w-12 h-12 bg-gray-50/90 dark:bg-slate-900/90 rounded-xl border-2 border-black dark:border-white">
        <Image
            className="rounded-lg"
            src={image}
            width={48}
            height={49}
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
       >
       </div>
        <div style={{ transform: "translateX(-30px)" }} className="w-52 md:w-60 py-1">
            <p className="text-lg font-bold text-slate-700 dark:text-slate-200">{name}</p>
            <p className="text-sm text-zinc-400 dark:text-zinc-400">{desc}</p>
        </div>
    </a>
</div>
  )
};

export default function About() {
  const { locale } = useRouter();

  return (
    <>
      {aboutTranslations.about
        .filter((p) => p.locale === locale)
        .map((text) => (
          <div className="flex flex-col justify-center items-start max-w-3xl w-full mx-auto text-left py-8 md:py-4 pb-20">
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
                <div className="w-full md:w-1/2 max-w-1/2">
                  <figure>
                    <Image
                      className="rounded-lg"
                      src={"/static/images/books/ios_programming_cover.jpeg"}
                      width={140}
                      height={190}
                      alt={"A book"}
                    />
                  </figure>
                  <figcaption className="py-2">
                      <p className="text-sm md:text-lg font-semibold">
                        iOS Programming Fundamentals
                      </p>
                      <p className="text-sm md:text-lg text-gray-400">
                        Matt Neuburg
                      </p>
                    </figcaption>
                </div>
                <div className="w-full md:w-1/2 md:max-w-1/2 ml-8">
                  <figure>
                    <Image
                      className="rounded-lg"
                      src={"/static/images/books/from_zero_to_one_cover.jpeg"}
                      width={140}
                      height={190}
                      alt={"A book"}
                    />
                    <figcaption className="py-2">
                      <p className="text-sm md:text-lg font-semibold">
                        De Cero a Uno
                      </p>
                      <p className="text-sm md:text-lg text-gray-400">
                        Peter Thiel
                      </p>
                    </figcaption>
                  </figure>
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
                url={"https://developer.apple.com/swift/"}
                image={"/static/images/logos/swift_logo.png"}
                name={"Swift"}
                desc={text.stack[0].swift}
                color={"#F69032"}
            />
            <AppItem
                url={"https://developer.apple.com/xcode/swiftui/"}
                image={"/static/images/logos/swiftui_logo.png"}
                name={"Swift UI"}
                desc={text.stack[0].swift_ui}
                color={"#5EA5F7"}
              />
            <AppItem
                url={"https://www.typescriptlang.org/"}
                image={"/static/images/logos/typescript_logo.png"}
                name={"TypeScript"}
                desc={text.stack[0].typescript}
                color={"#5EA5F7"}
              />
              <AppItem
                url={"http://vanilla-js.com/"}
                image={"/static/images/logos/javascript_logo.png"}
                name={"JavaScript"}
                desc={text.stack[0].javascript}
                color={"#F3CB56"}
              />
              <AppItem
                url={"https://expo.dev/"}
                image={"/static/images/logos/expo_logo.png"}
                name={"Expo"}
                desc={text.stack[0].expo}
                color={"#B177FB"}
              />
              <AppItem
                url={"https://reactnative.dev/"}
                image={"/static/images/logos/react_native_logo.png"}
                name={"React Native"}
                desc={text.stack[0].react_native}
                color={"#FC7E7E"}
              />
              <AppItem
                url={"https://react.dev/"}
                image={"/static/images/logos/react_icon.png"}
                name={"React"}
                desc={text.stack[0].react}
                color={"#5EA5F7"}
              />
              <AppItem
                url={"https://nodejs.org/"}
                image={"/static/images/logos/node_icon.png"}
                name={"Node.js"}
                desc={text.stack[0].node}
                color={"#2DD39C"}
              />
            </div>
          </div>
        ))}
    </>
  );
}
