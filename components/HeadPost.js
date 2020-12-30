export default function HeadPost({ meta }) {
  return (
    <div className="flex justify-center flex-col">
      <div className="text-2xl font-extrabold">{meta.title}</div>
      <div className="text-xl font-semibold">{meta.description}</div>
      <div className="flex justify-between row">
        <div className="text-gray-500">{meta.date}</div>
        <div className="text-gray-500">
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
