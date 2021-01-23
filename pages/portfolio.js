import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="flex flex-col space-y-4 mx-auto">
      <a href="#">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg mx-0 lg:max-w-xl lg:mx-auto">
          <div className="p-6">
            <span className="flex">
              <Image src={"/static/images/chief.png"} width={60} height={60} />
            </span>
          </div>
        </div>
      </a>
      <a href="#">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg mx-0 lg:max-w-xl lg:mx-auto">
          <div className="p-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              hendrerit elit quis ullamcorper vehicula. Cras sed scelerisque
              odio. Etiam sem ipsum, lobortis a rutrum eget, suscipit in eros.
              Nunc nunc eros, ultrices non diam in, rhoncus commodo leo.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
