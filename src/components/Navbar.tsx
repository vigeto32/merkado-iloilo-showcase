import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Terminal Market", path: "/terminal" },
  { label: "Central Market", path: "/central" },
  { label: "Jaro Big Market", path: "/jaro" },
  { label: "La Paz Market", path: "/lapaz" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary rounded-lg p-1.5">
              <ShoppingBag className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-primary-foreground leading-none block">
                Merkado
              </span>
              <span className="font-body text-xs text-gold leading-none tracking-widest uppercase">
                Iloilo
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium font-body transition-all duration-200 ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-primary-foreground/80 hover:text-gold hover:bg-gold/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-gold/20 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2 rounded-md text-sm font-body ${
                location.pathname === link.path
                  ? "bg-primary text-primary-foreground"
                  : "text-primary-foreground/80 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
