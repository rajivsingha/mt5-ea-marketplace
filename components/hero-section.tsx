import { Bot, TrendingUp, Shield, Zap, BarChart3, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(100,149,237,0.08),transparent_50%)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Main hero content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-medium text-primary">
              17 Expert Advisors Available
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            <span className="text-balance">Professional</span>{" "}
            <span className="text-primary">MT5</span>{" "}
            <span className="text-balance">Trading Systems</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            Precision-engineered Expert Advisors for MetaTrader 5. 
            Backtested across 25+ brokers with real tick data. 
            No martingale. No grid. Just clean, profitable logic.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">17</p>
                <p className="text-xs text-muted-foreground">Expert Advisors</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">25+</p>
                <p className="text-xs text-muted-foreground">Brokers Tested</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-emerald-500" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">18+ Years</p>
                <p className="text-xs text-muted-foreground">Backtest Data</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="group rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm p-5 hover:border-primary/30 hover:bg-card/50 transition-all duration-300">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:glow-gold transition-all">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">No Risky Strategies</h3>
            <p className="text-xs text-muted-foreground">
              Zero martingale, zero grid. Clean entry/exit logic with proper risk management.
            </p>
          </div>

          <div className="group rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm p-5 hover:border-primary/30 hover:bg-card/50 transition-all duration-300">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:glow-blue transition-all">
              <Zap className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">Real Tick Testing</h3>
            <p className="text-xs text-muted-foreground">
              Every EA tested with real tick data across multiple brokers for accuracy.
            </p>
          </div>

          <div className="group rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm p-5 hover:border-primary/30 hover:bg-card/50 transition-all duration-300">
            <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3">
              <BarChart3 className="h-5 w-5 text-emerald-500" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">Prop Firm Ready</h3>
            <p className="text-xs text-muted-foreground">
              Designed with strict drawdown control for FTMO, Funded Next, and more.
            </p>
          </div>

          <div className="group rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm p-5 hover:border-primary/30 hover:bg-card/50 transition-all duration-300">
            <div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-3">
              <Users className="h-5 w-5 text-orange-500" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">Telegram Support</h3>
            <p className="text-xs text-muted-foreground">
              Direct access to developer support via Telegram for setup and questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
