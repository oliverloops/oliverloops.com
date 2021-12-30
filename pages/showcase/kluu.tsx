import Image from "next/image";

const KluuShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-4 place-self-center md:max-w-3/5 md:w-3/5 md:pt-14 pt-12 pb-12">
      <div className="col-start-1 md:col-span-2">
        <h1 className="text-3xl md:text-4xl mb-4">Kluu</h1>
        <p className="remarkable text-gray-500 leading-6 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tortor libero, lacinia laoreet imperdiet a, finibus sed nibh. Nullam
          felis felis, suscipit nec dictum at, mattis vel massa. Fusce est leo,
          commodo id suscipit eget, maximus nec quam.
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
                  Node.js
                </p>
              </li>
              <li>
                <p className="remarkable text-gray-600 dark:text-gray-400">
                  Azure Cloud
                </p>
              </li>
            </ul>
          </div>
          <div>
            <p className="heading text-lg mb-2">Link</p>
            <ul>
              <li>
                <a href="https://rango.dev">
                  <p className="basic-text py-1 after:bg-black dark:after:bg-white underline-animation  font-semibold">
                    Visit site
                  </p>
                </a>
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
            src={"/static/images/showcase/rango_showcase_1.png"}
            width={800}
            height={500}
          />
        </figure>
      </div>
      <div className="md:row-start-3 md:col-start-1 md:col-span-2 mt-12">
        <h2 className="text-2xl md:text-3xl mb-4">Subtitle 1</h2>
        <p className="remarkable text-gray-500 leading-6 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tortor libero, lacinia laoreet imperdiet a, finibus sed nibh. Nullam
          felis felis, suscipit nec dictum at, mattis vel massa. Fusce est leo,
          commodo id suscipit eget, maximus nec quam.
        </p>
      </div>
      <div className="md:row-start-4 md:col-start-2 md:col-span-2 mt-16">
        <h2 className="text-2xl md:text-3xl mb-4">Subtitle 2</h2>
        <p className="remarkable text-gray-500 leading-6 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tortor libero, lacinia laoreet imperdiet a, finibus sed nibh. Nullam
          felis felis, suscipit nec dictum at, mattis vel massa. Fusce est leo,
          commodo id suscipit eget, maximus nec quam.
        </p>
      </div>
      <div className="md:row-start-5 md:col-span-3 mt-16">
        <div className="flex flex-col md:flex-row">
          <figure className="mb-8 md:mb-0 md:mr-4 rounded-md shadow-lg md:shadow-xl dark:shadow-none">
            <Image
              className="rounded-md"
              src={"/static/images/showcase/rango_showcase_3.png"}
              width={2000}
              height={1200}
            />
          </figure>
          <figure className="md:ml-4 rounded-md shadow-lg md:shadow-xl dark:shadow-none">
            <Image
              className="rounded-md"
              src={"/static/images/showcase/rango_showcase_2.png"}
              width={2000}
              height={1200}
            />
          </figure>
        </div>
      </div>
      <div className="md:row-start-6 md:col-span-3 mt-8 md:mt-16">
        <h2 className="text-2xl md:text-3xl md:text-center mb-4">Subtitle 3</h2>
        <p className="remarkable text-gray-500 md:text-center leading-6 md:px-16 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tortor libero, lacinia laoreet imperdiet a, finibus sed nibh. Nullam
          felis felis, suscipit nec dictum at, mattis vel massa. Fusce est leo,
          commodo id suscipit eget, maximus nec quam.
        </p>
      </div>
      <div className="md:row-start-7 col-start-1 md:col-span-3 py-12">
        <figure className="rounded-md shadow-lg md:shadow-xl dark:shadow-none">
          <Image
            className="rounded-md"
            src={"/static/images/showcase/rango_showcase_4.png"}
            width={2000}
            height={1200}
          />
        </figure>
      </div>
      <div className="md:row-start-8 md:col-start-1 md:col-span-3 md:mt-4 mb-8">
        <h2 className="text-2xl md:text-3xl mb-4">Subtitle 4</h2>
        <p className="remarkable text-gray-500 leading-6 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tortor libero, lacinia laoreet imperdiet a, finibus sed nibh. Nullam
          felis felis, suscipit nec dictum at, mattis vel massa. Fusce est leo,
          commodo id suscipit eget, maximus nec quam.
        </p>
      </div>
    </div>
  );
};

export default KluuShowcase;
