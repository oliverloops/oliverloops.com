import { Post } from "../components/Post";
import { posts } from "../getAllPosts";

export default function Home() {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </>
  );
}
