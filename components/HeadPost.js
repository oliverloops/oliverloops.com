export default function HeadPost({ meta }) {
  return (
    <div className="flex justify-center flex-col">
      <div className="text-2xl font-extrabold">{meta.title}</div>
      <div className="text-xl font-semibold">{meta.description}</div>
      <div className="flex justify-between row">
        <div className="">{meta.date}</div>
        <div>
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
