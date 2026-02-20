import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface MarketCardProps {
  name: string;
  tagline: string;
  description: string;
  path: string;
  emoji: string;
  highlight: string;
}

export default function MarketCard({ name, tagline, description, path, emoji, highlight }: MarketCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
      {/* Colored top bar */}
      <div className="h-2 bg-gradient-to-r from-primary to-sunset" />

      <div className="p-6">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </div>

        {/* Badge */}
        <span className="inline-block text-xs font-body font-semibold tracking-wider uppercase text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-3">
          {highlight}
        </span>

        <h3 className="font-display text-xl font-bold text-foreground mb-1">{name}</h3>
        <p className="text-sm font-body font-medium text-primary mb-3">{tagline}</p>
        <p className="text-sm font-body text-muted-foreground leading-relaxed mb-5">{description}</p>

        <Link
          to={path}
          className="inline-flex items-center gap-2 text-sm font-body font-semibold text-primary hover:text-accent transition-colors group/link"
        >
          Explore Market
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
