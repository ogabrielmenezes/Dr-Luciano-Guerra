import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section id="sobre" className="relative py-20 md:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="md:col-span-1">
            <p className="text-white/70 leading-relaxed">
              Ha mais de 20 anos, Dr. Luciano Guerra conduz uma medicina baseada em precisao
              tecnica, escuta real e investigacao profunda.
            </p>
          </div>
          <div className="md:col-span-1 text-center">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-2">
              Luciano Guerra
            </h2>
            <p className="text-white/60 text-sm">
              CRM-BA 17101 - RQE 22832 - RQE 13316 - Salvador, BA
            </p>
          </div>
          <div className="md:col-span-1 md:text-right">
            <p className="text-white/70 leading-relaxed">
              Ginecologista, obstetra e especialista em cirurgia ginecologica e reproducao humana,
              com conduta clara, elegante e baseada em evidencias.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12 aspect-[16/7]">
          <picture>
            <source media="(max-width: 767px)" srcSet="/images/about-mobile.png" />
            <Image
              src="/images/about-desktop.png"
              alt="Dr. Luciano Guerra"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </picture>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="https://api.whatsapp.com/send?phone=5571981092820"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold text-primary-dark font-semibold hover:bg-gold-light transition-colors"
          >
            Agendar Consulta
          </Link>
        </div>
      </div>
    </section>
  );
}
