import { get } from "@/lib/http";
import { Post } from "@/features/posts/types";

export const postService = {
  getPosts: async (
    query: string = "",
    category?: string,
    sortBy: string = "newest"
  ): Promise<Post[]> => {
    const res = await get<Post[]>("/posts", {
      _expand: "user",
    });
    return res;
  },

  getPost: async (id: number): Promise<Post> => {
    const res = await get<Post>("/posts/" + id, {
      _expand: "user",
      // headers: { "Content-Type": "application/json" },
    });
    return res;
  },

  createPost: async (data: {
    title: string;
    content: string;
    authorId: string;
  }) => {
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create post");
    }

    return response.json();
  },
};
