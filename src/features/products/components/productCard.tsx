import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Product } from "@/features/products/types";
import { cn } from "@/lib/utils";
import { useBasketStore } from "@/features/basket/store";
import { BasketProduct, BasketStore } from "@/features/basket/types";

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  const basketProduct = useBasketStore((state: BasketStore) =>
    state.getProduct(product.id)
  );
  const increaseBasketProduct = useBasketStore(
    (state: BasketStore) => state.addProduct
  );
  const decreaseBasketProduct = useBasketStore(
    (state: BasketStore) => state.removeProduct
  );

  return (
    <div className={cn("border", "mb-2", "p-2", "rounded", "min-h-32")}>
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={500}
        height={500}
      />
      <h2 className={cn("font-bold")}>{product.title}</h2>
      <div className={cn("flex", "align-center", "justify-between")}>
        <p
          className={cn("text-lg")}
          onClick={() => increaseBasketProduct(product)}
        >
          +
        </p>
        <p>{basketProduct?.quantity ?? 0}</p>
        <p
          className={cn("text-lg")}
          onClick={() => decreaseBasketProduct(product.id)}
        >
          -
        </p>
      </div>
    </div>
  );
};

export { ProductCard };
