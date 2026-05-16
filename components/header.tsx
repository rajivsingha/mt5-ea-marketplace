"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Menu,
  X,
  Bot,
  Mail,
  MessageCircle,
} from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/30 group-hover:glow-gold transition-all duration-300">
            <Bot className="h-5 w-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-wider text-primary">
              PythonX
            </span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
              Trading Systems
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Products
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary"
            asChild
          >
            <Link href="https://t.me/pythonxtrading" target="_blank">
              <MessageCircle className="h-4 w-4 mr-1" />
              Telegram
            </Link>
          </Button>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-gold"
          >
            <TrendingUp className="h-4 w-4 mr-1" />
            View All EAs
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col gap-2 p-4">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-primary px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-border/40">
              <Button variant="outline" size="sm" asChild>
                <Link href="mailto:support@pythonx.trading">
                  <Mail className="h-4 w-4 mr-1" />
                  Contact
                </Link>
              </Button>
              <Button size="sm" className="bg-primary text-primary-foreground">
                <TrendingUp className="h-4 w-4 mr-1" />
                View All EAs
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
