import AuthorHeadPost from "./AuthorHeadPost";

export default function BlogPost({ children, meta }) {
  return (
    <article className="flex flex-col justify-center max-w-2xl mx-auto mb-4 w-full">
      <AuthorHeadPost meta={meta} isBlogPost />
      {children}
    </article>
  );
}
