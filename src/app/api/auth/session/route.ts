"use server";

import { cookies } from "next/headers";

import { AUTH_TOKEN_KEY } from "@/constants/auth";

const POST = async () => {
  const cookieStore = await cookies();

  // read the HttpOnly cookie
  const token = await cookieStore.get(AUTH_TOKEN_KEY)?.value;
  if (!token) {
    return Response.json({ message: "Unuthenticated" }, { status: 401 });
  }

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
};

export { POST };
