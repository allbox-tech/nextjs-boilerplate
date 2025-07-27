"use client";

import type { UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { useMutate } from "@/hooks/useApiCall";
import { useAuth } from "@/contexts/auth";
import { userService } from "@/features/users/services/userService";

export const useLogout = (): UseMutationResult => {
  const { logout } = useAuth();
  const router = useRouter();

  return useMutate(() => userService.logout(), {
    onSuccess: () => {
      logout();
      router.replace("/");
    },
  });
};
