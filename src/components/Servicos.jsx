import { Scissors, Sparkles, Crown, Eye, Brush, Smile, Flame } from "lucide-react";
import Section, { TituloSecao } from "./Section";
import { servicos, mostrarPrecos } from "../config";

const ICONES = {
  scissors: Scissors,
  razor: Sparkles,
  crown: Crown,
  eye: Eye,
  brush: Brush,
  smile: Smile,
  flame: Flame,
};

export default function Servicos() {
  return (
    <Section id="servicos" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <TituloSecao
          eyebrow="O que fazemos"
          titulo="Serviços"
          sub="Escolha o seu e já reserve o horário — a confirmação vem pelo WhatsApp."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {servicos.map((s) => {
            const Icone = ICONES[s.icone] || Scissors;
            return (
              <article
                key={s.id}
                className={`group relative rounded-3xl border bg-ink-2 p-7 transition-all duration-300 hover:-translate-y-1 ${
                  s.destaque
                    ? "border-gold/40 hover:border-gold"
                    : "border-line hover:border-gold/50"
                }`}
              >
                {s.destaque && (
                  <span className="absolute right-5 top-5 rounded-full bg-gold/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                    Mais pedido
                  </span>
                )}
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-ink-3 text-gold transition-colors group-hover:border-gold/50">
                  <Icone className="h-5 w-5" />
                </span>
                <h3 className="display mt-6 text-2xl md:text-3xl">{s.nome}</h3>
                <p className="mt-3 text-sm text-white/55 leading-relaxed">
                  {s.desc}
                </p>
                {mostrarPrecos && s.preco && (
                  <p className="mt-5 text-lg font-bold text-gold">{s.preco}</p>
                )}
                <a
                  href="#agendar"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-gold"
                >
                  Reservar
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
