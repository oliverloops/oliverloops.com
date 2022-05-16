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
  const { locale } = useRouter();

  return (
    <>
      {aboutTranslations.about
        .filter((p) => p.locale === locale)
        .map((text) => (
          <div className="flex flex-col items-start text-left md:max-w-3/5 md:w-3/5 mx-auto my-16">
            <h1 className="heading font-bold text-3xl md:text-4xl mb-4 text-black dark:text-white">
              {text.title}
            </h1>
            <div className="mb-4 mr-12 text-justify leading-6 text-gray-600 dark:text-gray-400">
              <p className="text-md">
                {text.desc[0].p1}{" "}
                <a
                  className="text-yellow-300 font-semibold underline"
                  href="https://rango.dev/"
                >
                  Rango
                </a>
                .
              </p>
              <Text>{text.desc[0].p2}</Text>
              <Text>{text.desc[0].p3}</Text>
            </div>
            <h2 className="font-bold text-3xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
              {text.books}
            </h2>
            <h3 className="basic-text font-semibold mb-2 text-2xl dark:text-white">
              {text.reading}
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
                <figcaption className="py-2 lg:py-4">
                  <p className="text-md md:text-xl font-semibold">
                    Atomic Design
                  </p>
                  <p className="text-sm md:text-lg text-gray-400">Brad Frost</p>
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
                  <figcaption className="py-2 lg:py-4">
                    <p className="text-md md:text-xl font-semibold">
                      Working in Public
                    </p>
                    <p className="text-sm md:text-lg text-gray-400">
                      Nadia Eghbal
                    </p>
                  </figcaption>
                </figure>
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
                url={"http://vanilla-js.com/"}
                image={"/static/images/logos/javascript_logo.png"}
                name={"JavaScript"}
                desc={text.stack[0].javascript}
              />
              <AppItem
                url={"https://www.typescriptlang.org/"}
                image={"/static/images/logos/typescript_logo.png"}
                name={"TypeScript"}
                desc={text.stack[0].typescript}
              />
              <AppItem
                url={"https://reactjs.org/"}
                image={"/static/images/logos/react_icon.png"}
                name={"React"}
                desc={text.stack[0].react}
              />
              <AppItem
                url={"https://reactnative.dev/"}
                image={"/static/images/logos/react_native_logo.png"}
                name={"React Native"}
                desc={text.stack[0].react_native}
              />
              {/* <AppItem
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
              /> */}
              <AppItem
                url={"https://tailwindcss.com/"}
                image={"/static/images/logos/tailwind.png"}
                name={"Tailwind CSS"}
                desc={text.stack[0].tailwind}
              />
              <AppItem
                url={"https://nextjs.org/"}
                image={"/static/images/logos/nextjs_logo.png"}
                name={"Next.js"}
                desc={text.stack[0].next}
              />
              <AppItem
                url={"https://nodejs.org/"}
                image={"/static/images/logos/node_icon.png"}
                name={"Node.js"}
                desc={text.stack[0].node}
              />
              <AppItem
                url={"https://graphql.org/"}
                image={"/static/images/logos/graphql_logo.png"}
                name={"GraphQL"}
                desc={text.stack[0].graphql}
              />
              <AppItem
                url={"https://planetscale.com/"}
                image={"/static/images/logos/planet_scale_logo.png"}
                name={"Planetscale"}
                desc={text.stack[0].planetscale}
              />
              <AppItem
                url={"https://www.mongodb.com/"}
                image={"/static/images/logos/mongo_db_logo.png"}
                name={"MongoDB"}
                desc={text.stack[0].mongodb}
              />
              <AppItem
                url={"https://vercel.com/"}
                image={"/static/images/logos/vercel_icon.jpeg"}
                name={"Vercel"}
                desc={text.stack[0].vercel}
              />
              <AppItem
                url={"https://www.netlify.com/"}
                image={"/static/images/logos/netlify_icon.png"}
                name={"Netlify"}
                desc={text.stack[0].netlify}
              />
            </div>
          </div>
        ))}
    </>
  );
}
