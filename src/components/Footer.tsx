import { ShoppingBag, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-lg p-1.5">
                <ShoppingBag className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display font-bold text-lg leading-none block">Merkado</span>
                <span className="font-body text-xs text-gold leading-none tracking-widest uppercase">Iloilo</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm font-body leading-relaxed">
              Celebrating the heart of Iloilo City — where tradition meets modern commerce, culture, and community.
            </p>
          </div>

          {/* Markets */}
          <div>
            <h4 className="font-display font-bold text-gold mb-4 text-base">Our Markets</h4>
            <ul className="space-y-2">
              {[
                { label: "Terminal Market (Super)", path: "/terminal" },
                { label: "Central Market (Tienda Mayor)", path: "/central" },
                { label: "Jaro Big Market", path: "/jaro" },
                { label: "La Paz Public Market", path: "/lapaz" },
              ].map((m) => (
                <li key={m.path}>
                  <Link
                    to={m.path}
                    className="text-primary-foreground/70 hover:text-gold text-sm font-body transition-colors"
                  >
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-gold mb-4 text-base">Contact</h4>
            <ul className="space-y-3 text-sm font-body text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                <span>Iloilo City, Iloilo, Philippines</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-gold" />
                <span>(033) 335-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-gold" />
                <span>info@merkadoiloilo.gov.ph</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-10 pt-6 text-center text-primary-foreground/50 text-xs font-body">
          © 2025 Merkado Iloilo. City Government of Iloilo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
