"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Check,
  Clock,
  BarChart3,
  TrendingUp,
  Shield,
  Zap,
  Star,
  Sparkles,
  MessageCircle,
  Download,
  CreditCard,
  Bot,
  ChevronRight,
} from "lucide-react";

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <div className="relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_50%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/" className="hover:text-primary transition-colors">
            Products
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{product.shortName}</span>
        </nav>

        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all products
        </Link>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Product details */}
          <div className="lg:col-span-2">
            {/* Product header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {product.badge && (
                  <Badge
                    className={`
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
                <Badge variant="outline" className="border-border/50">
                  {product.symbol}
                </Badge>
                <Badge variant="outline" className="border-border/50">
                  <Clock className="h-3 w-3 mr-1" />
                  {product.timeframe}
                </Badge>
              </div>

              <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-foreground mb-3">
                {product.name}
              </h1>

              <p className="text-lg text-muted-foreground mb-6">
                {product.description}
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-card/50 border border-border/50 px-4 py-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Category:</span>
                  <span className="text-sm font-medium text-foreground">{product.category}</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-card/50 border border-border/50 px-4 py-2">
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm text-muted-foreground">Symbol:</span>
                  <span className="text-sm font-medium text-foreground">{product.symbol}</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-8">
              <TabsList className="w-full justify-start bg-card/50 border border-border/50 p-1 h-auto flex-wrap">
                <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="backtest" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Backtest Results
                </TabsTrigger>
                <TabsTrigger value="features" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Features
                </TabsTrigger>
                <TabsTrigger value="faq" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  FAQ
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="rounded-xl border border-border/50 bg-card/30 p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">About This Expert Advisor</h3>
                  <div
                    className="text-muted-foreground leading-relaxed mb-6 prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: product.longDescription }}
                  />

                  <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="backtest" className="mt-6">
                <div className="rounded-xl border border-border/50 bg-card/30 p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Backtest Performance</h3>
                  
                  {product.backtest.period !== "N/A" ? (
                    <>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        <div className="rounded-lg bg-secondary/50 p-4 text-center">
                          <p className="text-xs text-muted-foreground mb-1">Test Period</p>
                          <p className="text-lg font-bold text-foreground">{product.backtest.period}</p>
                        </div>
                        <div className="rounded-lg bg-secondary/50 p-4 text-center">
                          <p className="text-xs text-muted-foreground mb-1">Initial Balance</p>
                          <p className="text-lg font-bold text-foreground">{product.backtest.initialBalance}</p>
                        </div>
                        <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-4 text-center">
                          <p className="text-xs text-muted-foreground mb-1">Final Balance</p>
                          <p className="text-lg font-bold text-emerald-400">{product.backtest.finalBalance}</p>
                        </div>
                        <div className="rounded-lg bg-secondary/50 p-4 text-center">
                          <p className="text-xs text-muted-foreground mb-1">Max Drawdown</p>
                          <p className="text-lg font-bold text-foreground">{product.backtest.maxDrawdown}</p>
                        </div>
                      </div>

                      {(product.backtest.profitFactor || product.backtest.winRate) && (
                        <div className="grid grid-cols-2 gap-4">
                          {product.backtest.profitFactor && (
                            <div className="rounded-lg bg-primary/10 border border-primary/30 p-4 text-center">
                              <p className="text-xs text-muted-foreground mb-1">Profit Factor</p>
                              <p className="text-xl font-bold text-primary">{product.backtest.profitFactor}</p>
                            </div>
                          )}
                          {product.backtest.winRate && (
                            <div className="rounded-lg bg-primary/10 border border-primary/30 p-4 text-center">
                              <p className="text-xs text-muted-foreground mb-1">Win Rate</p>
                              <p className="text-xl font-bold text-primary">{product.backtest.winRate}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <p className="text-muted-foreground">
                      This is a utility EA and does not have backtest results as it does not open trades automatically.
                    </p>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="features" className="mt-6">
                <div className="rounded-xl border border-border/50 bg-card/30 p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Technical Features</h3>
                  <div className="space-y-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                        <div className="h-6 w-6 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Zap className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="faq" className="mt-6">
                <div className="rounded-xl border border-border/50 bg-card/30 p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Frequently Asked Questions</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {product.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`} className="border-border/50">
                        <AccordionTrigger className="text-sm text-foreground hover:text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right column - Purchase card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                {/* Product image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <Badge variant="outline" className="border-primary/50 text-primary bg-background/80 backdrop-blur-sm">
                      {product.symbol} | {product.timeframe}
                    </Badge>
                  </div>
                </div>

                {/* Purchase info */}
                <div className="p-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-primary">
                      ${product.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground">USD</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    One-time payment. Lifetime license.
                  </p>

                  {/* Purchase benefits */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-emerald-500" />
                      <span className="text-muted-foreground">Lifetime updates included</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-emerald-500" />
                      <span className="text-muted-foreground">Direct Telegram support</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-emerald-500" />
                      <span className="text-muted-foreground">Detailed documentation</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-emerald-500" />
                      <span className="text-muted-foreground">Set files for tested brokers</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-gold" size="lg">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Purchase Now
                    </Button>
                    <Button variant="outline" className="w-full border-border/50 hover:border-primary/50" size="lg" asChild>
                      <Link href="https://t.me/Puri_Abhinav" target="_blank">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Contact on Telegram
                      </Link>
                    </Button>
                  </div>

                  {/* Trust badges */}
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Shield className="h-3 w-3" />
                        <span>Secure Payment</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        <span>Instant Delivery</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support card */}
              <div className="mt-4 rounded-xl border border-border/50 bg-card/30 p-4">
                <h4 className="font-semibold text-foreground text-sm mb-2">Need Help?</h4>
                <p className="text-xs text-muted-foreground mb-3">
                  Have questions before purchasing? Contact us directly.
                </p>
                <Button variant="ghost" size="sm" className="w-full text-primary hover:text-primary" asChild>
                  <Link href="https://t.me/Puri_Abhinav" target="_blank">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat on Telegram
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
