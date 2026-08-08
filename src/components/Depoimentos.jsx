import { Star, Quote } from "lucide-react";
import Section, { TituloSecao } from "./Section";
import { avaliacoes, site, barbeiros } from "../config";

const NUMEROS = [
  { valor: site.nota, rotulo: "Nota no Google" },
  { valor: `${site.qtdAvaliacoes}`, rotulo: "Avaliações" },
  { valor: `${barbeiros.length}`, rotulo: "Barbeiros na casa" },
];

export default function Depoimentos() {
  return (
    <Section id="depoimentos" className="py-20 md:py-28 bg-ink-2/40">
      <div className="max-w-6xl mx-auto px-6">
        <TituloSecao
          eyebrow="Quem já sentou na cadeira"
          titulo="O que dizem"
          sub="Avaliações reais do perfil da barbearia no Google."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {NUMEROS.map((n) => (
            <div
              key={n.rotulo}
              className="rounded-3xl border border-line bg-ink-2 p-7 text-center"
            >
              <p className="display text-5xl md:text-6xl text-gold">{n.valor}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/45">
                {n.rotulo}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {avaliacoes.map((a, i) => (
            <figure
              key={i}
              className="rounded-3xl border border-line bg-ink-2 p-7 md:p-9"
            >
              <Quote className="h-6 w-6 text-gold/60" />
              <blockquote className="mt-4 text-lg text-white/80 leading-relaxed">
                “{a.texto}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex items-center gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-gold" />
                  ))}
                </span>
                <span className="text-sm text-white/45">{a.autor}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {site.mapsUrl && (
          <div className="mt-10 text-center">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-2 px-7 py-4 text-sm font-semibold text-white/85 transition-colors hover:border-gold/60 hover:text-gold"
            >
              Ver todas as avaliações no Google
              <span aria-hidden="true">→</span>
            </a>
          </div>
        )}
      </div>
    </Section>
  );
}
