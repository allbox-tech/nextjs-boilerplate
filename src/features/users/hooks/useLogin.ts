"use client";

import type { UseMutationResult } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";

import { useMutate } from "@/hooks/useApiCall";
import type { Login } from "@/features/users/types";
import { useAuth } from "@/contexts/auth";
import { userService } from "@/features/users/services/userService";

export const useLogin = (): UseMutationResult<Login, Error> => {
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "/";

  return useMutate<Login, Error>(() => userService.login(), {
    onSuccess: (res: Login) => {
      login(res.accessToken);
      router.replace(redirectTo);
    },
  });
};
