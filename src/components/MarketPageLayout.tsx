import Navbar from "./Navbar";
import Footer from "./Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Vendor {
  name: string;
  category: string;
}

interface MarketPageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  history: string;
  stats: { label: string; value: string }[];
  vendors: Vendor[];
  highlights: string[];
  emoji: string;
}

export default function MarketPageLayout({
  title,
  subtitle,
  description,
  history,
  stats,
  vendors,
  highlights,
  emoji,
}: MarketPageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-16 bg-navy text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gold hover:text-primary-foreground text-sm font-body mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-start gap-6">
            <div className="text-6xl">{emoji}</div>
            <div>
              <p className="text-gold font-body text-sm font-semibold tracking-widest uppercase mb-2">{subtitle}</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{title}</h1>
              <p className="text-primary-foreground/80 font-body text-lg max-w-2xl leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl font-bold text-primary-foreground">{s.value}</div>
                <div className="text-primary-foreground/70 text-xs font-body mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* History & Overview */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">History & Overview</h2>
                <p className="font-body text-muted-foreground leading-relaxed">{history}</p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Market Highlights</h2>
                <ul className="space-y-3">
                  {highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-muted-foreground">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5 shrink-0">
                        {i + 1}
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Vendors sidebar */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Featured Vendors</h2>
              <div className="space-y-3">
                {vendors.map((v, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                    <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-base">
                      🏪
                    </div>
                    <div>
                      <div className="font-body font-semibold text-sm text-foreground">{v.name}</div>
                      <div className="font-body text-xs text-muted-foreground">{v.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
