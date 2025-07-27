"use server";

import { get } from "@/lib/http";
import { ProductsListResponse } from "@/features/products/types";

const GET = async (req: Request) => {
  try {
    const data = await get<ProductsListResponse>(
      "https://dummyjson.com/products"
    );

    return Response.json(data);
  } catch (err: any) {
    return Response.json(
      { message: err.message },
      { status: err.response?.status || 500 }
    );
  }
};

export { GET };
