import { FC } from "react";
import Link from "next/link";

import { WriterBadge } from "@/features/writers/components/writerBadge";
import { Post } from "@/features/posts/types";
import { cn } from "@/lib/utils";

const PostCard: FC<{ post: Post }> = ({ post }) => {
  return (
    <div className={cn("border", "mb-2", "p-2", "rounded", "min-h-32")}>
      <Link href={"/posts/" + post.id} className={cn("block")}>
        <h2 className={cn("font-bold")}>{post.title}</h2>
      </Link>
      <WriterBadge writer={post.user} />
    </div>
  );
};

export { PostCard };
