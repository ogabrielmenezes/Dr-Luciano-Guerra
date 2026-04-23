import Link from "next/link";

export function CTA() {
  return (
    <section id="agendamento" className="py-20 md:py-28 bg-background" aria-label="Agendamento">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="relative bg-primary-dark rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Decorative frame */}
          <div className="absolute inset-4 md:inset-6 border border-gold/20 rounded-2xl pointer-events-none" />

          {/* Content */}
          <div className="relative text-center">
            <p className="text-sm text-gold uppercase tracking-widest mb-4">Agendamento</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 text-balance">
              Voce merece respostas reais.
              <br />
              Nao mais suposicoes.
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-6 leading-relaxed">
              Ha mulheres que carregam duvidas por anos antes de encontrar alguem que realmente
              investigue. Nao precisa ser assim. Uma consulta pode mudar tudo.
            </p>

            {/* Credentials */}
            <p className="text-white/50 text-sm mb-2">CRM-BA 17101 - RQE 22832 - RQE 13316</p>
            <p className="text-white/50 text-sm mb-8">Salvador, Bahia</p>

            {/* CTA Button */}
            <Link
              href="https://api.whatsapp.com/send?phone=5571981092820"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold text-primary-dark font-semibold hover:bg-gold-light transition-colors"
            >
              Agendar pelo WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
