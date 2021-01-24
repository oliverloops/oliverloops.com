import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

//Custom styled components
const Div = styled.div`
  height: 320px;
  width: 600px;
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
  }

  @media (min-width: 300px) and (max-width: 768px) {
    height: auto;
    width: auto;
  }
`;

const AppImage = styled(Image)`
  border-radius: 12px;
`;

const PreviewContainer = styled.div`
  transform: translate(330px, 30px);
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
`;

const Circle = styled.div`
  width: 365px;
  height: 365px;
  border-radius: 50%;
  left: -200px;
  bottom: -200px;
  transform: scale(0);
  position: absolute;
  will-change: transform;
  transition: transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
`;
// End of custom styled components

// Main Portfolio Component
export default function Portfolio() {
  return (
    <motion.div
      className="flex flex-col space-y-4 mx-auto"
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
      <a href="#">
        <Div className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg mx-0 lg:w-full lg:mx-auto">
          <div className="p-4">
            <span className="flex">
              <AppImage
                src={"/static/images/portfolio/fitcloud.png"}
                width={58}
                height={58}
                alt={"fitcloud.mx"}
              />
              <div className="flex flex-col ">
                <p className="pt-2 px-4 text-lg font-semibold dark:text-white">
                  Fitcloud.mx
                </p>
                <p className="px-4 font-semibold dark:text-white">
                  Fitness sessions on demand
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
          <PreviewContainer className="shadow-xl">
            <AppImage
              src={"/static/images/portfolio/barrio_intercambia_web.png"}
              width={380}
              height={200}
              alt={"Desktop View"}
            />
          </PreviewContainer>
        </Div>
      </a>
      <a href="#">
        <Div className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg mx-0 lg:max-w-4xl lg:mx-auto">
          <div className="p-4">
            <span className="flex">
              <AppImage
                src={"/static/images/portfolio/barrio.png"}
                width={58}
                height={58}
                alt={"Barrio Intercambia"}
              />
              <div className="flex flex-col ">
                <p className="pt-2 px-4 text-lg font-semibold dark:text-white">
                  Barrio Intercambia
                </p>
                <p className="px-4 font-semibold dark:text-white">
                  Support against COVID-19
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
          <PreviewContainer className="shadow-xl">
            <AppImage
              src={"/static/images/portfolio/barrio_intercambia_web.png"}
              width={380}
              height={200}
              alt={"Desktop View"}
            />
          </PreviewContainer>
        </Div>
      </a>
      <a href="#">
        <Div className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg mx-0 lg:max-w-4xl lg:mx-auto">
          <div className="p-4">
            <span className="flex">
              <AppImage
                src={"/static/images/portfolio/react_hider.png"}
                width={58}
                height={58}
                alt={"React Hider"}
              />
              <div className="flex flex-col ">
                <p className="pt-2 px-4 text-lg font-semibold dark:text-white">
                  React Hider
                </p>
                <p className="px-4  font-semibold dark:text-white">
                  Conditional Rendering Made Easy
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
          <PreviewContainer className="shadow-xl">
            <Image
              src={"/static/images/portfolio/barrio_intercambia_web.png"}
              width={380}
              height={200}
              alt={"Desktop View"}
            />
          </PreviewContainer>
        </Div>
      </a>
      <a href="#">
        <Div className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg mx-0 lg:max-w-4xl lg:mx-auto">
          <div className="p-4">
            <span className="flex">
              <AppImage
                src={"/static/images/portfolio/kila.png"}
                width={58}
                height={58}
                alt={"Kila Logo"}
              />
              <div className="flex flex-col ">
                <p className="pt-2 px-4 text-lg font-semibold dark:text-white">
                  Kila
                </p>
                <p className="px-4  font-semibold dark:text-white">
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
          <PreviewContainer className="shadow-xl">
            <Image
              src={"/static/images/portfolio/barrio_intercambia_web.png"}
              width={380}
              height={200}
              alt={"Desktop View"}
            />
          </PreviewContainer>
        </Div>
      </a>
    </motion.div>
  );
}
