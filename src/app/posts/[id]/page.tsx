"use client";

import { use } from "react";
import Link from "next/link";

import { PostShowPage } from "@/components/pages/posts/show";
import { cn } from "@/lib/utils";

const PostPage = (props: any) => {
  const params = use<any>(props.params);

  return (
    <div>
      <div className={cn("flex", "align-center", "justify-between", "w-full")}>
        <h1>PostPage Page</h1>
        <Link href={"/posts"} className="block">
          Back
        </Link>
      </div>
      <PostShowPage postId={params.id} />
    </div>
  );
};

export default PostPage;
