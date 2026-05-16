"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/products";
import {
  TrendingUp,
  Clock,
  BarChart3,
  Sparkles,
  Star,
} from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:bg-card/80 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] h-full flex flex-col">
        {/* Top badge area */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <div className="flex gap-2">
            {product.badge && (
              <Badge
                className={`
                  text-xs font-semibold px-2 py-0.5
                  ${
                    product.badge === "Bestseller"
                      ? "bg-primary text-primary-foreground"
                      : product.badge === "Premium"
                      ? "bg-accent text-accent-foreground"
                      : product.badge === "Elite"
                      ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }
                `}
              >
                {product.badge === "Bestseller" && (
                  <Star className="h-3 w-3 mr-1 fill-current" />
                )}
                {product.badge}
              </Badge>
            )}
            {product.isNew && (
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                <Sparkles className="h-3 w-3 mr-1" />
                New
              </Badge>
            )}
          </div>
        </div>

        {/* Product image */}
        <div className="relative h-40 overflow-hidden bg-secondary/50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {/* Subtle gradient overlay at bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
          {/* Animated corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4">
          {/* Title */}
          <h3 className="font-semibold text-foreground text-sm leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
          
          {/* Short description */}
          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-3 text-[10px] text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{product.timeframe}</span>
            </div>
            <div className="flex items-center gap-1">
              <BarChart3 className="h-3 w-3" />
              <span>{product.category}</span>
            </div>
          </div>

          {/* Backtest highlights */}
          {product.backtest.maxDrawdown !== "N/A" && (
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="rounded-lg bg-secondary/50 p-2 text-center">
                <p className="text-[10px] text-muted-foreground">Max DD</p>
                <p className="text-xs font-semibold text-foreground">
                  {product.backtest.maxDrawdown}
                </p>
              </div>
              <div className="rounded-lg bg-secondary/50 p-2 text-center">
                <p className="text-[10px] text-muted-foreground">Growth</p>
                <p className="text-xs font-semibold text-emerald-400">
                  {product.backtest.initialBalance} → {product.backtest.finalBalance.length > 8 
                    ? product.backtest.finalBalance.replace("$", "$").split(",")[0] + "K+"
                    : product.backtest.finalBalance
                  }
                </p>
              </div>
            </div>
          )}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-3 border-t border-border/30">
            <div>
              <p className="text-lg font-bold text-primary">
                ${product.price.toLocaleString()}
              </p>
              <p className="text-[10px] text-muted-foreground">One-time</p>
            </div>
            <div className="flex items-center gap-1 text-xs font-medium text-primary group-hover:translate-x-1 transition-transform">
              <span>View Details</span>
              <TrendingUp className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
