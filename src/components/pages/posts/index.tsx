"use client";

import { usePosts } from "@/features/posts/hooks/usePosts";
import { Post } from "@/features/posts/types";
import { PostCard } from "@/features/posts/components/postCard";
import { cn } from "@/lib/utils";

const PostListPage = () => {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) return <p>Loading…</p>;
  if (error)
    return <p className="text-red-600">Error: {(error as any).message}</p>;

  return (
    <div>
      <h1>PostListPage Page</h1>
      <div className={cn("grid", "grid-cols-5", "gap-2")}>
        {posts.map((post: Post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export { PostListPage };
