import { useAtom } from "jotai";
import { basketAtom } from "../store";
import { Product } from "@/features/products/types";
import { BasketProduct, BasketState } from "@/features/basket/types";

export const useBasket = () => {
  const [basket, setBasket] = useAtom(basketAtom);

  const findProduct = (id: number): BasketProduct | null => {
    const basketProduct = basket.products.find(
      (p: BasketProduct) => p.id === id
    );
    return basketProduct ? basketProduct : null;
  };

  const findImmerProduct = (
    state: BasketState,
    id: number
  ): BasketProduct | null => {
    const basketProduct = state.products.find(
      (p: BasketProduct) => p.id === id
    );
    return basketProduct ? basketProduct : null;
  };

  const increaseProduct = (product: Product, quantity = 1) => {
    setBasket((draft: BasketState) => {
      const basketProduct = findImmerProduct(draft, product.id);
      if (basketProduct) {
        basketProduct.quantity += quantity;
      } else {
        draft.products.push({ ...product, quantity });
      }
    });
  };

  const decreaseProduct = (product: Product, quantity = 1) => {
    setBasket((draft: BasketState) => {
      const basketProduct = findImmerProduct(draft, product.id);
      if (basketProduct) {
        basketProduct.quantity -= quantity;
      }

      sanitizeBasket(draft);
    });
  };

  const clear = () => {
    setBasket((draft: BasketState) => {
      draft.products = [];
    });
  };

  const sanitizeBasket = (state: BasketState) => {
    state.products = state.products.filter(
      (p: BasketProduct) => p.quantity > 0
    );
  };

  return { basket, findProduct, increaseProduct, decreaseProduct, clear };
};
