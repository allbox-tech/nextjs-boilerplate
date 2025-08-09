import { useAtom } from "jotai";
import { basketAtom } from "../store";
import { Product } from "@/features/products/types";
import { BasketProduct, BasketState } from "@/features/basket/types";
import { useBasket } from "./useBasket";

export const useBasketProduct = (product: Product) => {
  const { basket, findProduct, increaseProduct, decreaseProduct } = useBasket();
  const basketProduct = findProduct(product.id);

  const increase = (quantity = 1) => {
    increaseProduct(product, quantity);
  };

  const decrease = (quantity = 1) => {
    decreaseProduct(product, quantity);
  };

  return { basketProduct, increase, decrease };
};
