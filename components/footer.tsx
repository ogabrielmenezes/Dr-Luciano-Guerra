import Link from "next/link";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";

const navLinks = [
  { href: "#especialidades", label: "Especialidades" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="bg-primary-dark py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Main Content */}
        <div className="text-center mb-10">
          <p className="font-serif text-2xl md:text-3xl text-white mb-4">Dr. Luciano Guerra</p>
          <p className="text-white/60 max-w-md mx-auto leading-relaxed">
            Pronta para dar o proximo passo?
            <br />
            Agende sua consulta com quem realmente investiga.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10" aria-label="Links do rodape">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-10">
          <Link
            href="https://api.whatsapp.com/send?phone=5571981092820"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span className="text-sm">WhatsApp</span>
          </Link>
          <Link
            href="https://instagram.com/drlucianoguerra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-5 h-5" />
            <span className="text-sm">Instagram</span>
          </Link>
        </div>

        {/* Credentials & Disclaimer */}
        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-white/40 text-sm mb-2">CRM-BA 17101 - RQE 22832 - RQE 13316</p>
          <p className="text-white/30 text-xs max-w-lg mx-auto">
            As informacoes deste site tem carater educacional e nao substituem avaliacao medica.
          </p>
        </div>
      </div>
    </footer>
  );
}
