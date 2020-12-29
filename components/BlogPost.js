import Head from "next/head";
import HeadPost from "./HeadPost";

export default function BlogPost({ children, meta }) {
  return (
    <>
      <HeadPost meta={meta} isBlogPost />
      <article>{children}</article>
    </>
  );
}
