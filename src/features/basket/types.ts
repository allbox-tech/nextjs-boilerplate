import { Product } from "@/features/products/types";

export interface BasketProduct extends Product {
  quantity: number;
}

export interface BasketState {
  products: BasketProduct[];
}

export interface BasketActions {
  addProduct: (product: BasketProduct, quantity?: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeProduct: (id: number, quantity: number) => void;
  clear: () => void;
  getProduct: (id: number) => BasketProduct | null;
}

export type BasketStore = BasketState & BasketActions;
