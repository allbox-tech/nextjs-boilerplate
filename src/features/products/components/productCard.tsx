import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Product } from "@/features/products/types";
import { cn } from "@/lib/utils";
import { BasketProduct, BasketStore } from "@/features/basket/types";
import { useBasketProduct } from "@/features/basket/hooks/useBasketProduct";

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  const { basketProduct, increase, decrease } = useBasketProduct(product);

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
        <p className={cn("text-lg")} onClick={() => increase()}>
          +
        </p>
        <p>{basketProduct?.quantity ?? 0}</p>
        <p className={cn("text-lg")} onClick={() => decrease()}>
          -
        </p>
      </div>
    </div>
  );
};

export { ProductCard };
