export default function HeadPost({ meta }) {
  return (
    <div className="flex flex-row">
      <div>{meta.title}</div>
      <div>{meta.description}</div>
    </div>
  );
}
