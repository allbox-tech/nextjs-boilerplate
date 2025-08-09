"use client";

import { atomWithStorage } from "jotai/utils";
import { withImmer } from "jotai-immer";

import { Product } from "@/features/products/types";
import { BasketProduct, BasketState } from "./types";

const baseBasketAtom = atomWithStorage<BasketState>("basket", {
  products: [],
});

export const basketAtom = withImmer(baseBasketAtom);
