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
      <article className="flex flex-col justify-center w-full max-w-3xl mx-auto pt-12 md:pt-4 pb-16">
        <AuthorHeadPost meta={meta} isBlogPost />
        {children}
      </article>
    </>
  );
}
