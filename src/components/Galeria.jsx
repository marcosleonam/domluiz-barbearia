import { Instagram, Star } from "lucide-react";
import Section, { TituloSecao } from "./Section";
import Foto from "./Foto";
import { fotos, site, avaliacoes } from "../config";

export default function Galeria() {
  return (
    <Section id="galeria" className="py-20 md:py-28 bg-ink-2/40">
      <div className="max-w-6xl mx-auto px-6">
        <TituloSecao
          eyebrow="Trabalhos"
          titulo="Nossa régua"
          sub="Um pouco do que sai da cadeira todo dia."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {fotos.galeria.map((f, i) => (
            <div
              key={f.arquivo + i}
              className="overflow-hidden rounded-2xl border border-line aspect-[4/5]"
            >
              <Foto arquivo={f.arquivo} alt={f.alt}>
                {`Foto ${i + 1}`}
              </Foto>
            </div>
          ))}

          {/* Card de avaliação do Google fecha o grid */}
          <div className="flex flex-col justify-center rounded-2xl border border-gold/30 bg-ink-2 p-6 aspect-[4/5]">
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold" />
              ))}
            </div>
            <p className="display mt-4 text-5xl text-gold">{site.nota}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">
              no Google
            </p>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              “{avaliacoes[0].texto}”
            </p>
            <p className="mt-3 text-xs text-white/35">
              {site.qtdAvaliacoes} avaliações
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-2 px-7 py-4 text-sm font-semibold text-white/85 transition-colors hover:border-gold/60 hover:text-gold"
          >
            <Instagram className="h-4 w-4" />
            Ver mais no Instagram {site.instagramHandle}
          </a>
        </div>
      </div>
    </Section>
  );
}
