"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const specialties = [
  {
    id: "histeroscopia",
    title: "Histeroscopia",
    description:
      "Procedimento minimamente invasivo que permite visualizar o interior do utero com uma camera de alta definicao. E o metodo mais preciso para diagnosticar e tratar alteracoes uterinas como polipos, miomas submucosos, sinequias e malformacoes.",
    benefits: [
      "Diagnostico preciso de sangramento uterino anormal",
      "Remocao de polipos e miomas submucosos",
      "Investigacao de infertilidade",
      "Recuperacao rapida e pouco invasiva",
    ],
  },
  {
    id: "laparoscopia",
    title: "Laparoscopia",
    description:
      "Cirurgia minimamente invasiva realizada por pequenas incisoes no abdomen. Permite diagnosticar e tratar diversas condicoes ginecologicas com menos dor, menor tempo de internacao e recuperacao mais rapida.",
    benefits: [
      "Tratamento de cistos ovarianos",
      "Cirurgia para endometriose",
      "Retirada de miomas",
      "Laqueadura tubaria",
    ],
  },
  {
    id: "endometriose",
    title: "Cirurgia para Endometriose",
    description:
      "Tratamento especializado para endometriose, uma condicao onde o tecido do endometrio cresce fora do utero causando dor e infertilidade. A abordagem e individualizada, focando em aliviar sintomas e preservar a fertilidade.",
    benefits: [
      "Mapeamento completo das lesoes",
      "Cirurgia conservadora quando possivel",
      "Equipe multidisciplinar",
      "Acompanhamento pos-operatorio personalizado",
    ],
  },
  {
    id: "adenomiose",
    title: "Adenomiose e Miomas",
    description:
      "Diagnostico e tratamento de adenomiose (endometrio que invade a parede do utero) e miomas uterinos (tumores benignos). O tratamento pode ser clinico ou cirurgico, dependendo dos sintomas e do desejo de gestacao.",
    benefits: [
      "Avaliacao individualizada",
      "Opcoes de tratamento clinico e cirurgico",
      "Preservacao uterina quando possivel",
      "Tecnicas minimamente invasivas",
    ],
  },
  {
    id: "polipos",
    title: "Polipos Uterinos",
    description:
      "Polipos sao crescimentos benignos no endometrio que podem causar sangramento anormal e dificuldade para engravidar. A histeroscopia e o metodo ideal para diagnostico e remocao.",
    benefits: [
      "Diagnostico preciso por histeroscopia",
      "Remocao no mesmo procedimento",
      "Analise histopatologica",
      "Acompanhamento pos-remocao",
    ],
  },
  {
    id: "infertilidade",
    title: "Investigacao de Infertilidade",
    description:
      "Investigacao completa das causas de infertilidade feminina, incluindo avaliacao hormonal, anatomica e funcional. Trabalhamos com abordagem baseada em evidencias para identificar e tratar as causas.",
    benefits: [
      "Avaliacao completa do casal",
      "Histeroscopia e laparoscopia diagnostica",
      "Parceria com clinicas de reproducao assistida",
      "Orientacao clara sobre opcoes de tratamento",
    ],
  },
];

export function Specialties() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const selected = specialties.find((s) => s.id === selectedSpecialty);

  return (
    <section id="especialidades" className="relative py-20 md:py-28 bg-background">
      {/* Curved top decoration */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full overflow-hidden">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          className="w-full h-12 md:h-16"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60V0C360 60 720 60 1080 30C1260 15 1380 10 1440 0V60H0Z"
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm text-gold uppercase tracking-widest mb-3">Especialidades</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-dark mb-4 text-balance">
            Um olhar que vai alem do diagnostico convencional.
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            Sua especialidade e encontrar o que outros exames nao alcancam. Cada tratamento parte
            de uma investigacao honesta - nao de suposicoes.
          </p>
        </div>

        {/* Specialty Pills */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {specialties.map((specialty) => (
            <button
              key={specialty.id}
              type="button"
              onClick={() => setSelectedSpecialty(specialty.id)}
              className={cn(
                "px-5 py-3 rounded-full border transition-all duration-300",
                "text-sm md:text-base font-medium",
                "hover:border-gold hover:text-gold",
                selectedSpecialty === specialty.id
                  ? "bg-primary-dark text-white border-primary-dark"
                  : "bg-white text-primary-dark border-border"
              )}
            >
              {specialty.title}
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedSpecialty(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 md:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedSpecialty(null)}
              className="absolute top-4 right-4 text-muted hover:text-primary-dark transition-colors"
              aria-label="Fechar"
            >
              <X size={24} />
            </button>

            <h3 className="font-serif text-2xl md:text-3xl text-primary-dark mb-4">
              {selected.title}
            </h3>
            <p className="text-muted leading-relaxed mb-6">{selected.description}</p>

            <h4 className="font-semibold text-primary-dark mb-3">Indicacoes:</h4>
            <ul className="space-y-2 mb-6">
              {selected.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>

            <a
              href="https://api.whatsapp.com/send?phone=5571981092820"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-3 px-6 rounded-full bg-gold text-primary-dark font-semibold hover:bg-gold-light transition-colors"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
