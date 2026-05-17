import Link from "next/link";
import { Bot, Mail, MessageCircle, Instagram, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/40 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/30">
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
            <p className="text-sm text-muted-foreground max-w-md mb-4">
              Professional algorithmic trading solutions for MetaTrader 5. 
              Our Expert Advisors are backtested across multiple brokers with 
              real tick data for maximum reliability.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://t.me/Puri_Abhinav"
                target="_blank"
                className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                title="Telegram"
              >
                <MessageCircle className="h-4 w-4" />
              </Link>
              <Link
                href="https://wa.me/918288800053"
                target="_blank"
                className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="h-4 w-4" />
              </Link>
              <Link
                href="https://instagram.com/abhinavpuri31"
                target="_blank"
                className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                title="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="mailto:abhinavpuri31@gmail.com"
                className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                title="Email"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Expert Advisors
                </Link>
              </li>
              <li>
                <Link href="/?category=Scalping" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Scalping EAs
                </Link>
              </li>
              <li>
                <Link href="/?category=Breakout" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Breakout EAs
                </Link>
              </li>
              <li>
                <Link href="/?category=Prop+Firm" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Prop Firm Ready
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="https://t.me/Puri_Abhinav" target="_blank" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Telegram Support
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/918288800053" target="_blank" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  WhatsApp Support
                </Link>
              </li>
              <li>
                <Link href="mailto:abhinavpuri31@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Email Support
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com/abhinavpuri31" target="_blank" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} PythonX Trading. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Risk Disclosure
            </Link>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="mt-8 p-4 rounded-lg bg-secondary/30 border border-border/30">
          <p className="text-[10px] text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Risk Disclosure:</strong> Trading forex and CFDs involves significant risk and may not be suitable for all investors. 
            Past performance is not indicative of future results. The backtests shown are historical results and do not guarantee future performance. 
            You should only trade with money you can afford to lose. Please ensure you fully understand the risks involved.
          </p>
        </div>
      </div>
    </footer>
  );
}
