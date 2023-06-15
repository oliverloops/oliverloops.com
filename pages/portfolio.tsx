import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

//i18n
import experimentsTranslations from "./assets/experimentsTranslations.json";

//Custom styled components
const Div = styled.div`
  height: 380px;
  width: "100%";
  position: relative;
  overflow: hidden;

  &:hover {
    & > #circle {
      transform: scale(1);
    }

    & > #arrow {
      opacity: 1;
      transform: translateX(45px);
    }

    & > #preview {
      transform: translate(330px, 30px) rotate3d(0.342, -0.2, 0, 0deg)
        rotateZ(0deg);
      transition: transform 250ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;

      & > span > #preview-image {
        opacity: 1;
        filter: grayscale(0);
        transition: opacity 250ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
      }
    }
  }

  @media (min-width: 300px) and (max-width: 768px) {
    height: auto;
    width: auto;

    &:hover {
      & > #arrow {
        opacity: 1;
        transform: translate(10px, -15px);
      }
    }
  }
`;

const AppImage = styled(Image)`
  border-radius: 12px;
`;

const PreviewImage = styled(Image)`
  border-radius: 10px 0 0 0;
  filter: grayscale(1);
  opacity: 0.2;

  &:hover {
    opacity: 1;
    filter: grayscale(0);
  }
`;

const PreviewContainer = styled.div`
  transform: translate(340px, 32px) rotate3d(0.342, -0.2, 0, 18deg)
    rotateZ(2deg);
  position: absolute;
`;

const ArrowContainer = styled.div`
  position: absolute;
  transform: translateX(12px);
  bottom: 48px;
  opacity: 0;
  will-change: transform;
  transition: transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1) 0s,
    opacity 0.35s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;

  @media (min-width: 300px) and (max-width: 768px) {
    opacity: 1;
    transform: translateY(-50%);
    right: 24px;
    height: 32px;
    top: 50%;
  }
`;

const Circle = styled.div`
  width: 375px;
  height: 375px;
  border-radius: 50%;
  left: -220px;
  bottom: -200px;
  transform: scale(0);
  position: absolute;
  will-change: transform;
  transition: transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;

  @media (min-width: 300px) and (max-width: 768px) {
    left: 72%;
    right: 0px;
    transform: rotateZ(35deg);
  }
`;
// End of custom styled components

// Main Portfolio Component
export default function Portfolio() {
  const { locale } = useRouter();

  return (
    <>
      {experimentsTranslations.experiments
        .filter((p) => p.locale === locale)
        .map((text) => (
          <div className="flex flex-col justify-center max-w-3xl w-full mx-auto space-y-4 py-8 md:py-4 pb-20">
            <span className="mb-8">
              <h1 className="heading font-bold text-3xl md:text-4xl dark:text-white transition-all">
                {text.title}
              </h1>
              <p className="remarkable text-lg mt-2  dark:text-white transition-all">
                {text.desc}
              </p>
            </span>
            <a href="https://apps.apple.com/mx/app/medizona/id1636705569?l=en">
              <Div className="transition duration-300 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg py-2 my-2 md:max-w-4xl md:mx-auto">
                <div className="p-4">
                  <span className="flex">
                    <AppImage
                      src={"/static/images/portfolio/medizona_logo.png"}
                      width={54}
                      height={54}
                      alt={"Medizona Logo"}
                    />
                    <div className="flex flex-col ">
                      <p className="heading pt-2 px-3 lg:px-4 text-md lg:text-lg font-semibold dark:text-white">
                        Medizona
                      </p>
                      <p className="px-3 lg:px-4 text-xs lg:text-md font-semibold dark:text-white">
                        Médicos en tu zona
                      </p>
                    </div>
                  </span>
                </div>
                <Circle
                  style={{ backgroundColor: 'rgb(56, 57, 119)' }}
                  id="circle"
                ></Circle>
                <ArrowContainer id="arrow" className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h13M12 5l7 7-7 7"></path>
                  </svg>
                </ArrowContainer>
                <PreviewContainer id="preview" className="shadow-xl">
                  <PreviewImage
                    id={"preview-image"}
                    src={"/static/images/portfolio/medizona_app.png"}
                    width={455}
                    height={265}
                    alt={"Desktop View"}
                  />
                </PreviewContainer>
              </Div>
            </a>
            <a href="https://kmatmospheres.com">
              <Div className="transition duration-300 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg py-2 my-2 md:max-w-4xl md:mx-auto">
                <div className="p-4">
                  <span className="flex">
                    <AppImage
                      src={"/static/images/portfolio/km_logo.png"}
                      width={58}
                      height={58}
                      alt={"KM Atmospheres Logo"}
                    />
                    <div className="flex flex-col ">
                      <p className="heading pt-2 px-3 lg:px-4 text-md lg:text-lg font-semibold dark:text-white">
                        KM Atmospheres
                      </p>
                      <p className="px-3 lg:px-4 text-xs lg:text-md font-semibold dark:text-white">
                        Construyendo espacios en armonía
                      </p>
                    </div>
                  </span>
                </div>
                <Circle
                  style={{ backgroundColor: "#000" }}
                  id="circle"
                ></Circle>
                <ArrowContainer id="arrow" className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h13M12 5l7 7-7 7"></path>
                  </svg>
                </ArrowContainer>
                <PreviewContainer id="preview" className="shadow-xl">
                  <PreviewImage
                    id={"preview-image"}
                    src={"/static/images/portfolio/km_web.png"}
                    width={445}
                    height={265}
                    alt={"Desktop View"}
                  />
                </PreviewContainer>
              </Div>
            </a>
            <a href="https://github.com/dohooo/react-native-reanimated-carousel">
              <Div className="transition duration-300 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg py-2 my-2 md:max-w-4xl md:mx-auto">
                <div className="p-4">
                  <span className="flex">
                    <AppImage
                      src={"/static/images/logos/react_native_logo.png"}
                      width={54}
                      height={54}
                      alt={"React Native Logo"}
                    />
                    <div className="flex flex-col ">
                      <p className="heading pt-2 px-3 lg:px-4 text-md lg:text-lg font-semibold dark:text-white">
                        Reanimated Carousel
                      </p>
                      <p className="px-3 lg:px-4 text-xs lg:text-md font-semibold dark:text-white">
                        Infinite scroll component
                      </p>
                    </div>
                  </span>
                </div>
                <Circle
                  style={{ backgroundColor: "#5EA5F7" }}
                  id="circle"
                ></Circle>
                <ArrowContainer id="arrow" className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h13M12 5l7 7-7 7"></path>
                  </svg>
                </ArrowContainer>
                <PreviewContainer id="preview" className="shadow-xl">
                  <PreviewImage
                    id={"preview-image"}
                    src={"/static/images/portfolio/reanimated_carousel.png"}
                    width={445}
                    height={265}
                    alt={"Desktop View"}
                  />
                </PreviewContainer>
              </Div>
            </a>
            <a href="https://barriointercambia.org/">
              <Div className="transition duration-300 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg py-2 my-2 md:max-w-4xl md:mx-auto">
                <div className="p-4">
                  <span className="flex">
                    <AppImage
                      src={"/static/images/portfolio/barrio.png"}
                      width={58}
                      height={58}
                      alt={"Barrio Intercambia"}
                    />
                    <div className="flex flex-col ">
                      <p className="heading pt-2 px-3 lg:px-4 text-md lg:text-lg font-semibold dark:text-white">
                        Barrio Intercambia
                      </p>
                      <p className="px-3 lg:px-4 text-xs lg:text-md font-semibold dark:text-white">
                        Support{" "}
                        <span className="hidden md:inline md:text-black md:dark:text-white">
                          against
                        </span>{" "}
                        COVID-19
                      </p>
                    </div>
                  </span>
                </div>
                <Circle
                  style={{ backgroundColor: "#B177FB" }}
                  id="circle"
                ></Circle>
                <ArrowContainer id="arrow" className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h13M12 5l7 7-7 7"></path>
                  </svg>
                </ArrowContainer>
                <PreviewContainer id="preview" className="shadow-xl">
                  <PreviewImage
                    id={"preview-image"}
                    src={"/static/images/portfolio/barrio_intercambia_web.png"}
                    width={445}
                    height={260}
                    alt={"Desktop View"}
                  />
                </PreviewContainer>
              </Div>
            </a>
          </div>
        ))}
    </>
  );
}
