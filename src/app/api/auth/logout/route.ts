"use server";

import { cookies } from "next/headers";

import { AUTH_TOKEN_KEY } from "@/constants/auth";

const POST = async () => {
  const cookieStore = await cookies();

  try {
    cookieStore.delete({
      name: AUTH_TOKEN_KEY,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
    });

    return Response.json({});
  } catch (err: any) {
    return Response.json(
      { message: err.message },
      { status: err.response?.status || 500 }
    );
  }
};

export { POST };
