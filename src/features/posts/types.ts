import { User } from "@/features/users/types";

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  user: User;
}
