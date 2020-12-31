export default function HeadPost({ meta }) {
  return (
    <div className="flex justify-center flex-col">
      <div className="text-2xl font-bold dark:text-white">{meta.title}</div>
      <div className="text-xl font-semibold dark:text-white">
        {meta.description}
      </div>
      <div className="flex justify-between row">
        <div className="text-gray-400">{meta.date}</div>
        <div className="text-gray-400">
          <span role="img" aria-label="coffee">
            ☕️
          </span>{" "}
          &nbsp;
          {meta.readTime} min read
        </div>
      </div>
    </div>
  );
}
