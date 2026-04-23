"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "O que e histeroscopia e por que ela e o carro-chefe do Dr. Luciano?",
    answer:
      "A histeroscopia e um procedimento que permite visualizar o interior do utero com uma camera de alta definicao. E o exame mais preciso para diagnosticar alteracoes como polipos, miomas submucosos, sinequias e malformacoes uterinas. O Dr. Luciano e especialista neste procedimento e o utiliza como ferramenta principal de investigacao porque oferece um diagnostico que outros exames simplesmente nao alcancam.",
  },
  {
    question: "Qual e a diferenca entre laparoscopia e histeroscopia?",
    answer:
      "A histeroscopia e realizada por via vaginal para visualizar o interior do utero, sem cortes na pele. Ja a laparoscopia e feita por pequenas incisoes no abdomen para visualizar e operar estruturas como ovarios, trompas e a superficie externa do utero. Ambas sao minimamente invasivas, mas cada uma tem indicacoes especificas.",
  },
  {
    question: "Tenho dificuldade de engravidar. Por onde comecar?",
    answer:
      "O primeiro passo e uma consulta investigativa completa, onde avaliamos seu historico, exames anteriores e realizamos uma anamnese detalhada. A partir disso, solicitamos exames especificos para investigar as possiveis causas. A histeroscopia e frequentemente indicada para avaliar a cavidade uterina, e trabalhamos em parceria com clinicas de reproducao assistida quando necessario.",
  },
  {
    question: "Como funciona o atendimento? Voces atendem convenios?",
    answer:
      "O atendimento e particular, o que permite um tempo de consulta adequado para escuta real e investigacao profunda. Oferecemos orcamento transparente e opcoes de pagamento. O agendamento pode ser feito pelo WhatsApp, com resposta rapida e atencao personalizada.",
  },
  {
    question: "Tenho medo de cirurgia. Como e a recuperacao?",
    answer:
      "O Dr. Luciano prioriza tecnicas minimamente invasivas sempre que possivel. Na histeroscopia, a recuperacao e rapida - muitas pacientes retornam as atividades normais em 24 a 48 horas. Na laparoscopia, a recuperacao e mais rapida que na cirurgia tradicional, com menos dor e menor tempo de internacao. Cada caso e avaliado individualmente e voce recebe orientacoes claras sobre o pos-operatorio.",
  },
  {
    question: "Voces atendem pacientes de outras cidades?",
    answer:
      "Sim, recebemos pacientes de diversas cidades e estados. Para pacientes de fora de Salvador, organizamos o atendimento de forma otimizada, agendando consultas e procedimentos de maneira eficiente para minimizar deslocamentos. Entre em contato pelo WhatsApp para mais informacoes.",
  },
  {
    question: "Como o Dr. Luciano evita indicar procedimentos desnecessarios?",
    answer:
      "A abordagem e baseada em evidencias cientificas e investigacao profunda. Nenhum procedimento e indicado sem criterio claro e sem que a paciente entenda exatamente por que ele e necessario. A transparencia e a comunicacao clara sao pilares do atendimento - voce sempre sabe o que esta acontecendo e participa das decisoes sobre seu tratamento.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white" aria-label="Perguntas frequentes">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm text-gold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-dark text-balance">
            Respostas honestas para duvidas reais.
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-xl overflow-hidden bg-background"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-background/80 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-primary-dark pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={cn(
                    "flex-shrink-0 text-gold transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <p className="px-5 md:px-6 pb-5 md:pb-6 text-muted leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
