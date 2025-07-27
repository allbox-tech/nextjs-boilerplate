"use client";

import { FC } from "react";

import { useUser } from "@/features/users/hooks/useUser";
import { cn } from "@/lib/utils";

const UserShowPage: FC<{ userId: number }> = ({ userId }) => {
  const { data: user, isLoading, error } = useUser(userId);

  if (isLoading) return <p>Loading…</p>;
  if (error)
    return <p className="text-red-600">Error: {(error as any).message}</p>;

  return (
    <div>
      <h1>UserShowPage Page</h1>
      <h1 className={cn("font-bold", "mb-4")}>{user && user.name}</h1>
    </div>
  );
};

export { UserShowPage };
