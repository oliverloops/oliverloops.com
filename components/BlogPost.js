import AuthorHeadPost from "./AuthorHeadPost";

export default function BlogPost({ children, meta }) {
  return (
    <article>
      <AuthorHeadPost meta={meta} isBlogPost />
      {children}
    </article>
  );
}
