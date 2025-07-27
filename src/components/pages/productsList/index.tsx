"use client";

import { cn } from "@/lib/utils";
import { useProductsList } from "@/features/products/hooks/useProductsList";
import { ProductCard } from "@/features/products/components/productCard";
import { Product } from "@/features/products/types";

const ProductsListPage = () => {
  const { data: products, isLoading, error } = useProductsList();

  if (isLoading) return <p>Loading…</p>;
  if (error)
    return <p className="text-red-600">Error: {(error as any).message}</p>;

  return (
    <div>
      <h1>ProductsListPage Page</h1>
      <div className={cn("grid", "grid-cols-5", "gap-2")}>
        {products ? (
          products.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <>Empty</>
        )}
      </div>
    </div>
  );
};

export { ProductsListPage };
