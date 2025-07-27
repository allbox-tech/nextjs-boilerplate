"use client";
import { FC, use } from "react";

import { Post } from "@/features/posts/types";
import { usePost } from "@/features/posts/hooks/usePost";
import { cn } from "@/lib/utils";

const PostShowPage: FC<{ postId: number }> = ({ postId }) => {
  const { data: post, isLoading, error } = usePost(postId);

  if (isLoading) return <p>Loading…</p>;
  if (error)
    return <p className="text-red-600">Error: {(error as any).message}</p>;

  return (
    <div>
      <h1 className={cn("font-bold", "text-lg", "m-4")}>{post.title}</h1>
      <div>{post.body}</div>
    </div>
  );
};

export { PostShowPage };
