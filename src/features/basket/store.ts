"use client";

import { atomWithStorage } from "jotai/utils";

import { Product } from "@/features/products/types";
import { BasketProduct, BasketStore } from "./types";

export const basket = atomWithStorage<BasketStore>("basket", {});
