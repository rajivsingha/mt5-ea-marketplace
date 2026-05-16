"use client";

import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import { products, categories } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Filter, Grid3X3, LayoutGrid } from "lucide-react";

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [gridSize, setGridSize] = useState<"compact" | "normal">("normal");

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="py-12">
      {/* Filters */}
      <div className="mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.slice(0, 8).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`
                  text-xs
                  ${selectedCategory === category 
                    ? "bg-primary text-primary-foreground" 
                    : "border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
                  }
                `}
              >
                {category}
              </Button>
            ))}
            {categories.length > 8 && (
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-muted-foreground"
              >
                <Filter className="h-3 w-3 mr-1" />
                More
              </Button>
            )}
          </div>

          {/* Grid toggle */}
          <div className="hidden sm:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setGridSize("compact")}
              className={gridSize === "compact" ? "text-primary" : "text-muted-foreground"}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setGridSize("normal")}
              className={gridSize === "normal" ? "text-primary" : "text-muted-foreground"}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Products count */}
      <p className="text-sm text-muted-foreground mb-6">
        Showing <span className="text-foreground font-medium">{filteredProducts.length}</span> Expert Advisors
      </p>

      {/* Products grid */}
      <div className={`
        grid gap-4
        ${gridSize === "compact" 
          ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" 
          : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        }
      `}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty state */}
      {filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center mb-4">
            <Filter className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">No products found</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Try adjusting your filter to find what you&apos;re looking for.
          </p>
          <Button
            variant="outline"
            onClick={() => setSelectedCategory("All")}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </section>
  );
}
