"use client";

import { ReactNode, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useAuth } from "@/contexts/auth";

const GuestRouteLayout = ({ children }: { children: ReactNode }) => {
  const { loading, isAuthenticated } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!loading && isAuthenticated) {
      const redirectTo = searchParams.get("redirectTo") ?? "/";
      router.replace(redirectTo);
    }
  }, [loading]);

  if (loading || isAuthenticated) return <div>Loading</div>;

  return <div>{children}</div>;
};

export default GuestRouteLayout;
