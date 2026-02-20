import marketHero from "@/assets/market-hero.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarketCard from "@/components/MarketCard";
import { MapPin, Users, Store, Star } from "lucide-react";
import { Link } from "react-router-dom";

const markets = [
  {
    name: "Terminal Market",
    tagline: "Super Market of Iloilo",
    description:
      "The grandest of Iloilo's public markets, recently redeveloped with SM as partner. A modern commercial hub preserving its cultural roots.",
    path: "/terminal",
    emoji: "🏬",
    highlight: "Newly Redeveloped",
  },
  {
    name: "Central Market",
    tagline: "Tienda Mayor",
    description:
      "The historic 'Mayor's Store' at the heart of the city — modernized and revitalized as a premier cultural and commercial landmark.",
    path: "/central",
    emoji: "🏛️",
    highlight: "Cultural Hub",
  },
  {
    name: "Jaro Big Market",
    tagline: "Two-Level Modern Facility",
    description:
      "A brand-new two-level market facility with 547 kiosks and space for over 840 vendors, serving the growing Jaro district.",
    path: "/jaro",
    emoji: "🏗️",
    highlight: "547 Kiosks",
  },
  {
    name: "La Paz Public Market",
    tagline: "₱100M Redevelopment",
    description:
      "Rehabilitated with ₱100 million in improvements — enhanced sanitation, accessibility, and modern amenities for vendors and shoppers.",
    path: "/lapaz",
    emoji: "🌿",
    highlight: "Rehabilitated",
  },
];

const stats = [
  { icon: Store, value: "4", label: "Public Markets" },
  { icon: Users, value: "840+", label: "Vendors" },
  { icon: MapPin, value: "4", label: "City Districts" },
  { icon: Star, value: "100+", label: "Years of History" },
];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={marketHero}
          alt="Iloilo Terminal Market"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-1.5 mb-6">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-gold font-body text-sm font-medium tracking-wide">
              Iloilo City, Philippines
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-tight mb-4">
            Merkado
            <br />
            <span className="gradient-text">Iloilo</span>
          </h1>

          <p className="font-body text-primary-foreground/85 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Where tradition meets modern commerce. Discover the newly redeveloped
            public markets of Iloilo City — vibrant hubs of culture, community, and trade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/terminal"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-body font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "var(--gradient-gold)" }}
            >
              Explore Markets
            </Link>
            <a
              href="#markets"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-body font-semibold border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60">
          <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-primary-foreground/30 animate-pulse" />
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon className="w-5 h-5 text-primary-foreground/60 mb-1" />
                <div className="font-display text-3xl font-bold text-primary-foreground">{value}</div>
                <div className="font-body text-xs text-primary-foreground/70 uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Banner */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
            The Heart of <span className="gradient-text">Iloilo's Commerce</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            The Iloilo City Government has embarked on a landmark redevelopment of its historic public markets —
            Terminal Market ("Super"), Central Market ("Tienda Mayor"), Jaro Big Market, and La Paz Public Market.
            These markets are not just commercial spaces — they are cultural landmarks that define the spirit of Iloilo.
          </p>
        </div>
      </section>

      {/* Markets Grid */}
      <section id="markets" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
              Our Markets
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Four Iconic Public Markets
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {markets.map((market) => (
              <MarketCard key={market.path} {...market} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
            Visit <span className="text-gold">Merkado Iloilo</span> Today
          </h2>
          <p className="font-body text-primary-foreground/75 text-lg mb-8 leading-relaxed">
            Experience the best of Iloilo's local produce, crafts, delicacies, and culture —
            all under one roof across four modernized public markets.
          </p>
          <Link
            to="/terminal"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-body font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-warm"
            style={{ background: "var(--gradient-gold)" }}
          >
            Start Exploring
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
