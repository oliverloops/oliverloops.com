import Image from "next/image";
import { useRouter } from "next/router";
//i18n
import airbnbTranslations from "../assets/projects/airbnbTranslations.json";

const AirbnbShowcase = () => {
  const { locale } = useRouter();

  return (
    <div className="flex flex-col justify-center items-start max-w-3xl mx-auto w-full pt-12 md:pt-4 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-4 place-self-center w-full">
        <div className="col-start-1 md:col-span-2">
          <h1 className="text-3xl md:text-4xl mb-4">Airbnb Clone</h1>
          <p className="remarkable text-gray-500 leading-6 mt-4">
            {airbnbTranslations.content
              .filter((p) => p.locale === locale)
              .map((text) => (
                <p className="remarkable text-gray-500 leading-6 mt-4">
                  {text.description}
                </p>
              ))}
          </p>
        </div>
        <div className="row-start-2 md:row-start-1 md:col-start-3 mt-4">
          <div className="flex justify-between md:justify-around">
            <div className="md:px-4">
              <p className="heading text-lg mb-2">Stack</p>
              <ul>
                <li>
                  <p className="remarkable text-gray-600 dark:text-gray-400">
                    React Native
                  </p>
                </li>
                <li>
                  <p className="remarkable text-gray-600 dark:text-gray-400">
                    Expo
                  </p>
                </li>
                <li>
                  <p className="remarkable text-gray-600 dark:text-gray-400">
                    Node.js
                  </p>
                </li>
                <li>
                  <p className="remarkable text-gray-600 dark:text-gray-400">
                    Heroku
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <p className="heading text-lg mb-2">Platform</p>
              <ul>
                <li>
                  <p className="remarkable text-gray-600 dark:text-gray-400">
                    iOS
                  </p>
                </li>
                <li>
                  <p className="remarkable text-gray-600 dark:text-gray-400">
                    Android
                  </p>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
        <div className="md:row-start-2 col-start-1 md:col-span-3 mt-8">
          <figure className="mb-8 md:mb-0 md:mr-4 rounded-md shadow-lg md:shadow-xl dark:shadow-none">
            <Image
              className="rounded-md shadow-lg md:shadow-xl dark:shadow-none"
              src={"/static/images/showcase/airbnb/airbnb_showcase_1.png"}
              width={900}
              height={500}
            />
          </figure>
        </div>
        {airbnbTranslations.content
          .filter((p) => p.locale === locale)
          .map((text: any) => (
            <>
              <div className="md:row-start-3 md:col-start-1 md:col-span-2 mt-12">
                <h2 className="text-2xl md:text-3xl mb-4">
                  {text.subtitle_one[0].title}
                </h2>
                <p className="remarkable text-gray-500 leading-6 mt-4">
                  {text.subtitle_one[0].desc}
                </p>
              </div>
              <div className="md:row-start-4 md:col-start-2 md:col-span-2 mt-16">
                <h2 className="text-2xl md:text-3xl mb-4">
                  {text.subtitle_two[0].title}
                </h2>
                <p className="remarkable text-gray-500 leading-6 mt-4">
                  {text.subtitle_two[0].desc_one}
                </p>
                <p className="remarkable text-gray-500 leading-6 mt-4">
                  {text.subtitle_two[0].desc_two}
                </p>
              </div>
              <div className="md:row-start-5 md:col-span-3 mt-16">
                <div className="flex flex-col md:flex-row">
                  <figure className="mb-8 md:mb-0 md:mr-4 rounded-md shadow-lg md:shadow-xl dark:shadow-none">
                    <Image
                      className="rounded-md"
                      src={
                        "/static/images/showcase/airbnb/airbnb_showcase_2.png"
                      }
                      width={2000}
                      height={1100}
                    />
                  </figure>
                  <figure className="md:ml-4 rounded-md shadow-lg md:shadow-xl dark:shadow-none">
                    <Image
                      className="rounded-md"
                      src={"/static/images/showcase/airbnb/airbnb_cover.png"}
                      width={2000}
                      height={1100}
                    />
                  </figure>
                </div>
              </div>
              <div className="md:row-start-6 md:col-span-3 mt-8 md:mt-16">
                <h2 className="text-2xl md:text-3xl md:text-center mb-4">
                  {text.subtitle_three[0].title}
                </h2>
                <p className="remarkable text-gray-500 md:text-center leading-6 md:px-16 mt-4">
                  {text.subtitle_three[0].desc}
                </p>
              </div>
              <div className="md:row-start-7 col-start-1 md:col-span-3 py-12">
                <figure className="rounded-md shadow-lg md:shadow-xl dark:shadow-none">
                  <Image
                    className="rounded-md"
                    src={"/static/images/showcase/airbnb/airbnb_showcase_4.png"}
                    width={2000}
                    height={1100}
                  />
                </figure>
              </div>
              <div className="md:row-start-8 md:col-start-1 md:col-span-3 md:mt-4 mb-8">
                <h2 className="text-2xl md:text-3xl mb-4">
                  {text.subtitle_four[0].title}
                </h2>
                <p className="remarkable text-gray-500 leading-6 mt-4">
                  {text.subtitle_four[0].desc}
                </p>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default AirbnbShowcase;
