import Image from "next/image";
import styled from "styled-components";

//Custom styled components
const Div = styled.div`
  height: 320px;

  @media (min-width: 300px) and (max-width: 768px) {
    height: auto;
  }
`;

const AppImage = styled(Image)`
  border-radius: 10px;
`;

export default function Portfolio() {
  return (
    <div className="flex flex-col space-y-4 mx-auto">
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
        </Div>
      </a>
    </div>
  );
}
