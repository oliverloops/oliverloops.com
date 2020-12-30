import { Post } from "../components/Post";
import { posts } from "../getAllPosts";

export default function Blog() {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </>
  );
}
