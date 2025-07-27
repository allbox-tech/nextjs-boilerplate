"use client";

import { create, SetState, GetState } from "zustand";
import { devtools, persist, combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { Product } from "@/features/products/types";
import { BasketProduct, BasketStore } from "./types";

export const useBasketStore = create<BasketStore>()(
  devtools(
    persist(
      immer(
        combine(
          {
            products: [],
          },
          (set: SetState<BasketStore>, get: GetState<BasketStore>) => ({
            addProduct: (product: Product, quantity = 1) => {
              set((state: BasketStore) => {
                const existingProduct = state.products.find(
                  (p: BasketProduct) => p.id === product.id
                );
                if (existingProduct) {
                  existingProduct.quantity += quantity;
                } else {
                  state.products.push({ ...product, quantity });
                }
              });
            },

            updateQuantity: (id: number, quantity: number) => {
              set((state: BasketStore) => {
                const existingProduct = state.products.find(
                  (p: BasketProduct) => p.id === id
                );
                if (existingProduct) existingProduct.quantity = quantity;

                state.products = state.products.filter(
                  (p: BasketProduct) => p.quantity > 0
                );
              });
            },

            removeProduct: (id: number, quantity = 1) => {
              set((state: BasketStore) => {
                const existingProduct = state.products.find(
                  (p: BasketProduct) => p.id === id
                );
                if (existingProduct) existingProduct.quantity -= quantity;

                state.products = state.products.filter(
                  (p: BasketProduct) => p.quantity > 0
                );
              });
            },

            clear: () =>
              set((state: BasketStore) => {
                state.products = [];
              }),

            getProduct: (id: number) => {
              const product = get().products.find(
                (p: BasketProduct) => p.id === id
              );
              return product ? product : null;
            },
          })
        )
      ),
      {
        name: "basket",
        whitelist: ["products"],
        version: 1,
      }
    ),
    { name: "BasketStore" }
  )
);
