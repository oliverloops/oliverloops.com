//UI components
import HeadPost from "./HeadPost";

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <div
      className="flex flex-col 
      justify-center items-start mt-10 md:mt-0 h-32"
    >
      <HeadPost meta={meta} link={link} />
    </div>
  );
};
