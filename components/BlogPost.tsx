import { Component } from "react";
import AuthorHeadPost from "./AuthorHeadPost";

export default function BlogPost({
  children,
  meta,
}: {
  children: Component;
  meta: any;
}) {
  return (
    <>
      <article className="flex flex-col justify-center w-full md:max-w-3/5 md:w-3/5 my-8 md:my-16 mx-auto ">
        <AuthorHeadPost meta={meta} isBlogPost />
        {children}
      </article>
    </>
  );
}
