import { Post } from "../../src/components/blog/Post";
import { posts } from "../../src/getAllPosts";
import React from "react";

export default function IndexPage() {
  return (
      <>
        {posts.map((post) => (
            <Post key={post.link} post={post} />
        ))}
      </>
  );
}
