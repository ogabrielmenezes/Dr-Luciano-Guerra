const painPoints = [
  {
    number: "01",
    text: 'Sentem dores que os exames "nao explicam".',
  },
  {
    number: "02",
    text: "Tiveram tentativas de gravidez sem resultado.",
  },
  {
    number: "03",
    text: "Ciclos irregulares sem diagnostico definitivo.",
  },
  {
    number: "04",
    text: "Receberam condutas vagas e diagnosticos genericos.",
  },
  {
    number: "05",
    text: "Tem medo de procedimentos desnecessarios.",
  },
  {
    number: "06",
    text: "Sentem que nunca foram realmente ouvidas.",
  },
];

export function PainPoints() {
  return (
    <section id="dores" className="py-20 md:py-28 bg-white" aria-label="Indicacoes">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="bg-background rounded-3xl p-8 md:p-12 lg:p-16">
          {/* Header */}
          <div className="mb-10 md:mb-14">
            <p className="text-sm text-gold uppercase tracking-widest mb-3">
              Para quem e o Dr. Luciano
            </p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary-dark max-w-2xl text-balance">
              O acompanhamento certo para quem ainda nao encontrou respostas.
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {painPoints.map((point) => (
              <article
                key={point.number}
                className="group bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-gold/50 hover:shadow-lg transition-all duration-300"
              >
                <span className="inline-block text-xs font-semibold text-gold mb-3">
                  {point.number}
                </span>
                <p className="text-primary-dark leading-relaxed">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
