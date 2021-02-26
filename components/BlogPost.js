import React from "react";
import AuthorHeadPost from "./AuthorHeadPost";

export default function BlogPost({ children, meta }) {
  React.useEffect(() => {
    let bar = document.querySelector("#progress");
    window.addEventListener("scroll", () => {
      let max = document.body.scrollHeight - innerHeight;
      bar.style.width = `${(pageYOffset / max) * 100}%`;
    });
  }, []);

  return (
    <>
      <div id="#progress"></div>
      <article className="flex flex-col justify-center max-w-2xl mx-auto mb-4 w-full">
        <AuthorHeadPost meta={meta} isBlogPost />
        {children}
      </article>
    </>
  );
}
