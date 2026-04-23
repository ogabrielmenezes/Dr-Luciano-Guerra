"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#especialidades", label: "Especialidades" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "px-4 md:px-6 lg:px-8 pt-4"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl rounded-full transition-all duration-300",
          "flex items-center justify-between px-4 md:px-6 py-3",
          isScrolled
            ? "bg-primary-dark/95 backdrop-blur-md shadow-lg"
            : "bg-primary-dark/80 backdrop-blur-sm"
        )}
      >
        {/* Brand */}
        <Link
          href="#inicio"
          className="font-serif text-lg md:text-xl text-white hover:text-gold-light transition-colors"
        >
          Dr. Luciano Guerra
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navegacao principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <Link
            href="https://api.whatsapp.com/send?phone=5571981092820"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full",
              "bg-gold text-primary-dark font-medium text-sm",
              "hover:bg-gold-light transition-colors"
            )}
          >
            Agendar Consulta
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 rounded-2xl bg-primary-dark/95 backdrop-blur-md p-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/80 hover:text-white py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://api.whatsapp.com/send?phone=5571981092820"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 text-center py-3 px-4 rounded-full bg-gold text-primary-dark font-medium hover:bg-gold-light transition-colors"
            >
              Agendar Consulta
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
