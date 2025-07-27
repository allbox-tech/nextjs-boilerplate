import { get, post } from "@/lib/http";
import { User, Login } from "@/features/users/types";

export const userService = {
  getUser: async (id: number): Promise<User> => {
    const res = await get<User>("/users/" + id);
    return res;
  },

  login: async (): Promise<Login | Error> => {
    try {
      const res = await post<Login>("http://localhost:3000/api/auth/login", {
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 30, // optional, defaults to 60
      });

      return res;
    } catch (error: any) {
      console.error(error);
      return error;
    }
  },

  logout: async (): Promise<Login | Error> => {
    try {
      const res = await post<Login>("http://localhost:3000/api/auth/logout");

      return res;
    } catch (error: any) {
      console.error(error);
      return error;
    }
  },

  getUserSession: async (): Promise<Login> => {
    const res = await post<Login>("http://localhost:3000/api/auth/session");

    return res;
  },
};
