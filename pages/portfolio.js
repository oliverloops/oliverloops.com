import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

//Custom styled components
const Div = styled.div`
  height: 320px;
  position: relative;
  overflow: hidden;

  &:hover {
    & > #circle {
      transform: scale(1);
    }
  }

  @media (min-width: 300px) and (max-width: 768px) {
    height: auto;
  }
`;

const AppImage = styled(Image)`
  border-radius: 10px;
`;

const Circle = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  left: -120px;
  bottom: -120px;
  transform: scale(0);
  position: absolute;
  will-change: transform;
  transition: transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
`;
// End of custom styled components

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
        <Div className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg mx-0 lg:max-w-xl lg:mx-auto">
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
          <Circle style={{ backgroundColor: "orange" }} id="circle"></Circle>
        </Div>
      </a>
      <a href="#">
        <Div className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg mx-0 lg:max-w-xl lg:mx-auto">
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
        </Div>
      </a>
      <a href="#">
        <Div className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg mx-0 lg:max-w-xl lg:mx-auto">
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
          <Circle style={{ backgroundColor: "teal" }} id="circle"></Circle>
        </Div>
      </a>
      <a href="#">
        <Div className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg mx-0 lg:max-w-xl lg:mx-auto">
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
          <Circle style={{ backgroundColor: "purple" }} id="circle"></Circle>
        </Div>
      </a>
    </motion.div>
  );
}
