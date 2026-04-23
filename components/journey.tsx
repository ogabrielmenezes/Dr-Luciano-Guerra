const steps = [
  {
    step: "01",
    title: "Etapa 01",
    description: "Contato e agendamento pelo WhatsApp ou Instagram, com resposta rapida e atencao real.",
  },
  {
    step: "02",
    title: "Etapa 02",
    description:
      "Consulta investigativa com escuta ativa, anamnese profunda e exames solicitados com criterio.",
  },
  {
    step: "03",
    title: "Etapa 03",
    description:
      "Diagnostico com clareza, inclusive com histeroscopia ou laparoscopia quando necessario.",
  },
  {
    step: "04",
    title: "Etapa 04",
    description:
      "Conduta baseada em evidencias, sem pressao, sem protocolos genericos e com decisao compartilhada.",
  },
];

export function Journey() {
  return (
    <section id="jornada" className="py-20 md:py-28 bg-background" aria-label="Jornada">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm text-gold uppercase tracking-widest mb-3">Como funciona</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-dark mb-4 text-balance">
            Do primeiro contato ao diagnostico que muda tudo.
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            Cada etapa foi desenhada para que voce chegue ao diagnostico com clareza, nao com
            duvidas. Um processo transparente, humano e baseado em evidencias.
          </p>
        </div>

        {/* Timeline */}
        <ol className="relative">
          {steps.map((item, index) => (
            <li key={index} className="relative pb-10 last:pb-0">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[15px] top-8 w-px h-full bg-gold/30" />
              )}

              <div className="flex gap-6">
                {/* Dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-dark">{item.step}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="font-serif text-lg text-primary-dark mb-2">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
