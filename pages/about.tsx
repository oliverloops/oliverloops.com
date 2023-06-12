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
}: {
  url: string;
  image: string;
  name: string;
  desc: string;
}) => (
  <>
    <a
      className="flex rounded-2xl py-2 px-2 md:p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
      href={url}
    >
      <div>
        <Image
          className="rounded-xl"
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
  const { locale } = useRouter();

  return (
    <>
      {aboutTranslations.about
        .filter((p) => p.locale === locale)
        .map((text) => (
          <div className="flex flex-col justify-center items-start max-w-3xl w-full mx-auto text-left py-8 md:py-4 pb-20">
            <div className="flex justify-between">
              <div className="flex flex-col w-1/2">
                <h1 className="heading font-bold text-3xl md:text-4xl mb-4 text-black dark:text-white">
                  {text.title}
                </h1>
                <div className="mb-4 mr-12 text-justify leading-6 text-gray-600 dark:text-gray-400">
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
              <div className="flex flex-col w-1/2">
              <h2 className="font-bold text-3xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
                {text.reading}
              </h2>
              <div className="flex justify-center py-4">
                <div className="w-1/2 max-w-1/2">
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
                <div className="w-1/2 max-w-1/2 ml-8">
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
            <div className="grid grid-cols-1 md:grid-cols-2">
            <AppItem
                url={"https://developer.apple.com/swift/"}
                image={"/static/images/logos/swift_logo.png"}
                name={"Swift"}
                desc={text.stack[0].swift}
            />
            <AppItem
                url={"https://developer.apple.com/xcode/swiftui/"}
                image={"/static/images/logos/swiftui_logo.png"}
                name={"Swift UI"}
                desc={text.stack[0].swift_ui}
              />
            <AppItem
                url={"https://www.typescriptlang.org/"}
                image={"/static/images/logos/typescript_logo.png"}
                name={"TypeScript"}
                desc={text.stack[0].typescript}
              />
              <AppItem
                url={"http://vanilla-js.com/"}
                image={"/static/images/logos/javascript_logo.png"}
                name={"JavaScript"}
                desc={text.stack[0].javascript}
              />
              <AppItem
                url={"https://expo.dev/"}
                image={"/static/images/logos/expo_logo.png"}
                name={"Expo"}
                desc={text.stack[0].expo}
              />
              <AppItem
                url={"https://reactnative.dev/"}
                image={"/static/images/logos/react_native_logo.png"}
                name={"React Native"}
                desc={text.stack[0].react_native}
              />
              <AppItem
                url={"https://reactjs.org/"}
                image={"/static/images/logos/react_icon.png"}
                name={"React"}
                desc={text.stack[0].react}
              />
              <AppItem
                url={"https://nodejs.org/"}
                image={"/static/images/logos/node_icon.png"}
                name={"Node.js"}
                desc={text.stack[0].node}
              />
            </div>
          </div>
        ))}
    </>
  );
}
