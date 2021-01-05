//UI components
import Search from "../components/Search";
import { Post } from "../components/Post";
import { posts } from "../getAllPosts";

export default function Blog() {
  return (
    <div className="flex flex-col ">
      <h1 className="text-3xl font-extrabold dark:text-white">Blog</h1>
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
