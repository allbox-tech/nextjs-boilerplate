import type { UseQueryResult } from "@tanstack/react-query";

import { useFetch } from "@/hooks/useApiCall";

import { productService } from "@/features/products/services/productService";
import type { Product } from "@/features/products/types";

export const useProductsList = (): UseQueryResult<Product[], Error> => {
  return useFetch<Product[], Error>(["products-list"], () =>
    productService.getProductsList()
  );
};
