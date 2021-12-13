import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

//Custom styled components
const Div = styled.div`
  height: 350px;
  width: 700px;
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

      & > div > #preview-image {
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
  border-radius: 8px 0 0 0;
  filter: grayscale(1);
  opacity: 0.2;
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
  return (
    <div className="flex flex-col space-y-4 md:max-w-3/5 md:w-3/5 mx-auto my-16">
      <span className="mb-8">
        <h1 className="heading text-3xl md:text-4xl dark:text-white transition-all">
          Experiments
        </h1>
        <p className="basic-text text-lg font-light mt-2  dark:text-white transition-all">
          Active and past projects and some visual experiments.
        </p>
      </span>
      <a href="https://rango.dev">
        <Div className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg my-1 md:my-2 md:max-w-4xl md:mx-auto">
          <div className="p-4">
            <span className="flex">
              <AppImage
                src={"/static/images/portfolio/rango_icon.png"}
                width={58}
                height={58}
                alt={"Rango Logo"}
              />
              <div className="flex flex-col ">
                <p className="pt-2 px-3 lg:px-4 text-md lg:text-lg font-semibold dark:text-white">
                  Rango
                </p>
                <p className="px-3 lg:px-4 text-xs lg:text-md font-semibold dark:text-white">
                  JAMstack based{" "}
                  <span className="hidden md:inline md:text-black md:dark:text-white">
                    Solutions
                  </span>
                </p>
              </div>
            </span>
          </div>
          <Circle
            style={{ backgroundColor: "rgb(253, 211, 89)" }}
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
              src={"/static/images/portfolio/rango_web.png"}
              width={450}
              height={230}
              alt={"Desktop View"}
            />
          </PreviewContainer>
        </Div>
      </a>
      <a href="https://fullcodetesting.pythonanywhere.com/">
        <Div className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg py-2 my-1 md:my-2 md:max-w-4xl md:mx-auto">
          <div className="p-4">
            <span className="flex">
              <AppImage
                src={"/static/images/portfolio/fitcloud.png"}
                width={58}
                height={58}
                alt={"fitcloud.mx"}
              />
              <div className="flex flex-col ">
                <p className="pt-2 px-3 lg:px-4 text-md lg:text-lg font-semibold dark:text-white">
                  Fitcloud.mx
                </p>
                <p className="px-3 lg:px-4 text-xs lg:text-md font-semibold dark:text-white">
                  Fitness sessions&nbsp;
                  <span className="hidden md:inline md:text-black md:dark:text-white">
                    on demand
                  </span>
                </p>
              </div>
            </span>
          </div>
          <Circle
            style={{ backgroundColor: "rgb(255, 150, 81)" }}
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
              src={"/static/images/portfolio/fitcloud_web.png"}
              width={450}
              height={230}
              alt={"Desktop View"}
            />
          </PreviewContainer>
        </Div>
      </a>
      <a href="https://barriointercambia.org/">
        <Div className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg py-2 my-1 md:my-2 md:max-w-4xl md:mx-auto">
          <div className="p-4">
            <span className="flex">
              <AppImage
                src={"/static/images/portfolio/barrio.png"}
                width={58}
                height={58}
                alt={"Barrio Intercambia"}
              />
              <div className="flex flex-col ">
                <p className="pt-2 px-3 lg:px-4 text-md lg:text-lg font-semibold dark:text-white">
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
          <Circle style={{ backgroundColor: "tomato" }} id="circle"></Circle>
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
              width={450}
              height={230}
              alt={"Desktop View"}
            />
          </PreviewContainer>
        </Div>
      </a>
      <a href="https://github.com/oliverloops/react-hider">
        <Div className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg py-2 my-1 md:my-2 md:max-w-4xl md:mx-auto">
          <div className="p-4">
            <span className="flex">
              <AppImage
                src={"/static/images/portfolio/react_hider.png"}
                width={58}
                height={58}
                alt={"React Hider"}
              />
              <div className="flex flex-col ">
                <p className="pt-2 px-3 lg:px-4 text-md lg:text-lg font-semibold dark:text-white">
                  React Hider
                </p>
                <p className="px-3 lg:px-4 text-xs lg:text-md font-semibold dark:text-white">
                  Conditional Rendering{" "}
                  <span className="hidden md:inline md:text-black md:dark:text-white">
                    Made Easy
                  </span>
                </p>
              </div>
            </span>
          </div>
          <Circle
            style={{ backgroundColor: "rgb(40, 188, 252)" }}
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
              src={"/static/images/portfolio/react_hider_web.png"}
              width={450}
              height={230}
              alt={"Desktop View"}
            />
          </PreviewContainer>
        </Div>
      </a>
      <a href="https://kilaenvservices.netlify.app">
        <Div className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg py-2 my-1 md:my-2 md:max-w-4xl md:mx-auto">
          <div className="p-4">
            <span className="flex">
              <AppImage
                src={"/static/images/portfolio/kila.png"}
                width={58}
                height={58}
                alt={"Kila Logo"}
              />
              <div className="flex flex-col ">
                <p className="pt-2 px-3 lg:px-4 text-md lg:text-lg font-semibold dark:text-white">
                  Kila
                </p>
                <p className="px-3 lg:px-4 text-xs lg:text-md font-semibold dark:text-white">
                  Environmental Services
                </p>
              </div>
            </span>
          </div>
          <Circle
            style={{ backgroundColor: "rgb(49, 206, 135)" }}
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
              src={"/static/images/portfolio/kila_web.png"}
              width={450}
              height={230}
              alt={"Desktop View"}
            />
          </PreviewContainer>
        </Div>
      </a>
      <a href="#">
        <Div className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg py-2 my-1 md:my-2 md:max-w-4xl md:mx-auto">
          <div className="p-4">
            <span className="flex">
              <AppImage
                src={"/static/images/portfolio/natours_logo.png"}
                width={58}
                height={58}
                alt={"Natours Logo"}
              />
              <div className="flex flex-col ">
                <p className="pt-2 px-3 lg:px-4 text-md lg:text-lg font-semibold dark:text-white">
                  Natours
                </p>
                <p className="px-3 lg:px-4 text-xs lg:text-md font-semibold dark:text-white">
                  Pure CSS challenge
                </p>
              </div>
            </span>
          </div>
          <Circle
            style={{ backgroundColor: "rgb(155, 213, 181)" }}
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
              src={"/static/images/portfolio/natours_web.png"}
              width={450}
              height={230}
              alt={"Desktop View"}
            />
          </PreviewContainer>
        </Div>
      </a>
    </div>
  );
}
