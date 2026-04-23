"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Claudia M.",
    treatment: "Tratamento de Endometriose",
    quote:
      "Depois de anos convivendo com dores que todos diziam ser 'normais', o Dr. Luciano foi o primeiro medico que realmente investigou. Fiz a histeroscopia e finalmente entendi o que estava acontecendo no meu corpo.",
  },
  {
    name: "Marina R.",
    treatment: "Reproducao Assistida",
    quote:
      "Tentei engravidar por 3 anos. O Dr. Luciano foi o unico que me deu um mapa real do que estava acontecendo. Ele nao promete o que nao pode entregar - e isso foi exatamente o que precisei ouvir.",
  },
  {
    name: "Fernanda T.",
    treatment: "Cirurgia de Mioma",
    quote:
      "Tive um mioma que outros medicos queriam operar de formas mais invasivas. Com o Dr. Luciano, o procedimento foi minimamente invasivo e me recuperei em dias. Profissional excepcional.",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-primary-dark" aria-label="Depoimentos">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Header */}
          <div>
            <p className="text-sm text-gold uppercase tracking-widest mb-3">Depoimentos</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Retome sua vida!
              <br />
              Veja alguns depoimentos.
            </h2>
          </div>

          {/* Right - Testimonial Carousel */}
          <div className="relative">
            {/* Controls */}
            <div className="flex items-center gap-3 mb-6">
              <button
                type="button"
                onClick={goToPrevious}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Proximo depoimento"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-sm text-gold">{testimonials[currentIndex].treatment}</p>
              </div>
              <blockquote className="text-white/80 leading-relaxed italic">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>
            </div>

            {/* Counter */}
            <p className="mt-4 text-sm text-white/50">
              <span className="text-white">{currentIndex + 1}</span> / {testimonials.length}
            </p>

            {/* Dots */}
            <div className="flex gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    index === currentIndex ? "bg-gold" : "bg-white/30"
                  )}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
