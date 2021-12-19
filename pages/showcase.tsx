import Image from "next/image";

const Showcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-4 place-self-center md:max-w-3/5 md:w-3/5 md:pt-14 pb-12">
      <div className="col-start-1 md:col-span-2">
        <h1 className="text-3xl md:text-4xl mb-4">Showcase</h1>
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
                  React
                </p>
              </li>
              <li>
                <p className="remarkable text-gray-600 dark:text-gray-400">
                  Tailwind CSS
                </p>
              </li>
              <li>
                <p className="remarkable text-gray-600 dark:text-gray-400">
                  Next.js
                </p>
              </li>
            </ul>
          </div>
          <div>
            <p className="heading text-lg mb-2">Link</p>
            <ul>
              <li>
                <a href="#">Visit site</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:row-start-2 col-start-1 col-span-3">
        <figure className="py-12">
          <Image
            className="rounded-md"
            src={"/static/images/showcase/showcase_template_1.png"}
            width={2000}
            height={1200}
          />
        </figure>
      </div>
    </div>
  );
};

export default Showcase;
