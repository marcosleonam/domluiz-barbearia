import { motion, useReducedMotion } from "framer-motion";
import {
  Scissors, Flame, Smile, Eye, FlaskConical, Snowflake,
  Ruler, Wind, Droplet, Sparkles, Brush, Sun, Layers, Feather, PenTool,
} from "lucide-react";
import Section, { TituloSecao } from "./Section";
import { servicos, mostrarPrecos } from "../config";

const ICONES = {
  scissors: Scissors,
  flame: Flame,
  smile: Smile,
  eye: Eye,
  flask: FlaskConical,
  snow: Snowflake,
  ruler: Ruler,
  wind: Wind,
  droplet: Droplet,
  sparkles: Sparkles,
  brush: Brush,
  sun: Sun,
  layers: Layers,
  feather: Feather,
  pen: PenTool,
};

const lista = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function Servicos() {
  const reduz = useReducedMotion();
  const item = {
    hidden: { opacity: 0, y: reduz ? 0 : 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  const destaques = servicos.filter((s) => s.destaque);
  const demais = servicos.filter((s) => !s.destaque);

  return (
    <Section id="servicos" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <TituloSecao
          eyebrow="O que fazemos"
          titulo="Nossos serviços"
          sub="Escolha o seu e já reserve o horário — a confirmação vem pelo WhatsApp."
        />

        {/* Principais */}
        <motion.div
          variants={lista}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {destaques.map((s) => {
            const Icone = ICONES[s.icone] || Scissors;
            return (
              <motion.article
                key={s.id}
                variants={item}
                className="group relative rounded-3xl border border-line bg-ink-2 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60"
              >
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
              </motion.article>
            );
          })}
        </motion.div>

        {/* Lista completa */}
        {demais.length > 0 && (
          <div className="mt-14 rounded-3xl border border-line bg-ink-2 p-7 md:p-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h3 className="display text-2xl md:text-3xl">
                  E ainda tem mais
                </h3>
                <p className="mt-2 text-sm text-white/50">
                  Todos entram no agendamento pelo WhatsApp.
                </p>
              </div>
              <a
                href="#agendar"
                className="shrink-0 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-gold-soft"
              >
                Reservar horário
              </a>
            </div>

            <motion.ul
              variants={lista}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {demais.map((s) => {
                const Icone = ICONES[s.icone] || Scissors;
                return (
                  <motion.li
                    key={s.id}
                    variants={item}
                    className="flex items-start gap-3 rounded-2xl border border-line bg-ink px-4 py-4 transition-colors hover:border-gold/40"
                  >
                    <Icone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <div className="min-w-0">
                      <p className="font-semibold leading-tight">{s.nome}</p>
                      <p className="mt-1 text-xs text-white/45 leading-relaxed">
                        {s.desc}
                      </p>
                      {mostrarPrecos && s.preco && (
                        <p className="mt-2 text-sm font-bold text-gold">
                          {s.preco}
                        </p>
                      )}
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        )}
      </div>
    </Section>
  );
}
