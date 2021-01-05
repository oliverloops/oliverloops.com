//UI components
import Search from "../components/Search";
import { Post } from "../components/Post";
import { posts } from "../getAllPosts";

export default function Blog() {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-extrabold dark:text-white">Blog</h1>
      <p className="mt-4 mb-4 dark:text-white">
        I want to start writing and sharing all my experiences, projects and
        other cool stuff.
      </p>
      <Search />
      {posts
        .slice(0)
        .reverse()
        .map((post) => (
          <Post key={post.link} post={post} />
        ))}
    </div>
  );
}
