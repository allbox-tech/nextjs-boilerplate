import { get } from "@/lib/http";
import { Product, ProductsListResponse } from "@/features/products/types";

export const productService = {
  getProductsList: async (
    query: string = "",
    category?: string,
    sortBy: string = "newest"
  ): Promise<Product[]> => {
    const res = await get<ProductsListResponse>(
      "http://localhost:3000/api/products"
    );
    return res.products;
  },
};
