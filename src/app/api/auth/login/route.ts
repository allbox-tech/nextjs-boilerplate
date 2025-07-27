"use server";

import { cookies } from "next/headers";

import { post } from "@/lib/http";
import { User } from "@/features/users/types";
import { AUTH_TOKEN_KEY } from "@/constants/auth";

const POST = async (req: Request) => {
  const cookieStore = await cookies();
  const reqBody = await req.json();

  try {
    const data = await post<User>("https://dummyjson.com/auth/login", reqBody);

    cookieStore.set({
      name: AUTH_TOKEN_KEY,
      value: "NEW_ACCESS_TOKEN",
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
    });

    return Response.json({
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
      [AUTH_TOKEN_KEY]: "NEW_ACCESS_TOKEN",
    });
  } catch (err: any) {
    return Response.json(
      { message: err.message },
      { status: err.response?.status || 500 }
    );
  }
};

export { POST };
