import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col bg-primary-dark overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-dark/95 to-primary" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-8 md:pb-12 pt-32 md:pt-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          {/* Name Badge */}
          <div className="mb-6 md:mb-8">
            <p className="text-xs md:text-sm text-white/60 uppercase tracking-widest mb-2">
              Ginecologista e Cirurgiao
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white leading-tight">
              Dr. Luciano Guerra
            </h1>
          </div>

          {/* Tagline */}
          <div className="mb-6 md:mb-8">
            <h2 className="font-serif text-xl md:text-2xl lg:text-3xl text-white leading-snug mb-4 text-balance">
              Nao trato sintoma.
              <br />
              Investigo a causa.
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-white/70 max-w-xl leading-relaxed">
              Ha 20 anos, ofereco a mulher o que e raro na medicina: precisao tecnica com
              humanidade real. Um diagnostico que vai a fundo. Uma resposta que voce finalmente
              entende.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="https://api.whatsapp.com/send?phone=5571981092820"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gold text-primary-dark font-semibold text-base hover:bg-gold-light transition-colors group"
            >
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
              <span>AGENDAR CONSULTA</span>
            </Link>
            <Link
              href="#sobre"
              className="inline-flex items-center justify-center text-white/80 hover:text-white text-sm uppercase tracking-wider border-b border-gold/50 hover:border-gold pb-1 transition-colors"
            >
              Conheca o Dr. Luciano
            </Link>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-auto pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-end gap-6 md:gap-12">
            {/* Doctor Avatar & Info */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/avatar.webp"
                alt="Dr. Luciano Guerra"
                width={56}
                height={56}
                className="rounded-full border-2 border-gold/30"
              />
              <div>
                <p className="text-xs text-white/60">CRM-BA 17101 - RQE 22832 - RQE 13316</p>
                <p className="text-xs text-white/60">Cirurgia Ginecologica - Reproducao Humana</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 md:gap-12">
              <div>
                <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-white">2.000</p>
                <p className="text-xs text-white/60">pacientes atendidas</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-white whitespace-nowrap">
                  20 anos
                </p>
                <p className="text-xs text-white/60">de medicina</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <Link
        href="https://api.whatsapp.com/send?phone=5571981092820"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Contato via WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </Link>
    </section>
  );
}
