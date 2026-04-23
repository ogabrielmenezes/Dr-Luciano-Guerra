import { DiamondIcon } from "@/components/icons";

const differentials = [
  {
    title: "Diagnostico que vai a fundo",
    description:
      "A histeroscopia, seu carro-chefe, nao e apenas um procedimento. E a chave que abre diagnosticos que outros exames simplesmente nao alcancam.",
  },
  {
    title: "Medicina baseada em evidencias",
    description:
      "Cada conduta e embasada em rigor cientifico e atualizacao constante. Sem protocolo generico. Sem suposicoes.",
  },
  {
    title: "Honestidade radical",
    description:
      "Voce sai da consulta sabendo exatamente o que tem e o que vai acontecer. Transparencia nao e opcional - e o metodo.",
  },
  {
    title: "Visao integral da mulher",
    description:
      "Ginecologista. Obstetra. Especialista em cirurgia. Ele ve o corpo feminino com uma amplitude que poucos profissionais reunem em um unico atendimento.",
  },
  {
    title: "Cirurgia minimamente invasiva",
    description:
      "Recuperacao mais rapida, menos trauma cirurgico, resultados mais precisos. Tecnologia e tecnica a servico da mulher.",
  },
  {
    title: "Comunicacao que respeita sua inteligencia",
    description:
      '"Explico cada detalhe porque acredito que paciente informada e paciente segura."',
  },
];

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="py-20 md:py-28 bg-white"
      aria-label="Diferenciais do atendimento"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm text-gold uppercase tracking-widest mb-3">Diferenciais do cuidado</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-dark mb-4 text-balance">
            O que diferencia quem investiga de quem apenas prescreve.
          </h2>
          <p className="text-muted italic max-w-xl mx-auto">
            &ldquo;Nao trato o que aparece na superficie. Investigo o que esta por tras.&rdquo;
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <article
              key={index}
              className="group relative bg-background rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gold/20"
            >
              <DiamondIcon className="text-gold mb-4" />
              <h3 className="font-serif text-lg md:text-xl text-primary-dark mb-3">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
