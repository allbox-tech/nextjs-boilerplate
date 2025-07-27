import type { NextApiRequest, NextApiResponse } from "next";

const GET = async () => {
  return Response.json({ message: "pong" });
};

export { GET };
