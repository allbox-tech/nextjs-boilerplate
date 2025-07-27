"use client";

import { ReactNode, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useAuth } from "@/contexts/auth";

const ProtectedRouteLayout = ({ children }: { children: ReactNode }) => {
  const { loading, isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace(`/login/?redirectTo=${pathname}?${searchParams}`);
    }
  }, [loading]);

  if (loading || !isAuthenticated) return <div>Loading</div>;

  return <div>{children}</div>;
};

export default ProtectedRouteLayout;
