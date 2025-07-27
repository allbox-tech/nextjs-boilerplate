import type { UseQueryResult } from "@tanstack/react-query";

import { useFetch } from "@/hooks/useApiCall";

import { postService } from "@/features/posts/services/postService";
import type { Post } from "@/features/posts/types";

export const usePost = (id?: number): UseQueryResult<Post, Error> => {
  return useFetch<Post, Error>(["posts", id], () => postService.getPost(id!), {
    enabled: Boolean(id),
  });
};
