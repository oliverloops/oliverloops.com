import AuthorHeadPost from "./AuthorHeadPost";

export default function BlogPost({ children, meta }) {
  return (
    <>
      <AuthorHeadPost meta={meta} isBlogPost />
      <article>{children}</article>
    </>
  );
}
