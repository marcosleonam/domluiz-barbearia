import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Section, { TituloSecao } from "./Section";
import Foto from "./Foto";
import { barbeiros, site, whatsappLink, fotos } from "../config";

// Perfis da equipe: cada barbeiro tem um CTA que já abre o WhatsApp
// com o nome dele preenchido na mensagem.
const BIOS = {
  Otávio: "Degradê e acabamento na navalha.",
  Werlison: "Barba italiana e toalha quente.",
  Elton: "Corte clássico e corte infantil.",
};

const lista = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

export default function Barbeiros() {
  const reduz = useReducedMotion();
  const item = {
    hidden: { opacity: 0, y: reduz ? 0 : 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  if (!barbeiros.length) return null;

  return (
    <Section id="equipe" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <TituloSecao
          eyebrow="Quem corta"
          titulo="A equipe"
          sub="Escolha com quem você quer sentar — ou deixe com quem estiver livre."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Foto da equipe — aparece só aqui no site inteiro */}
          <motion.div
            initial={{ opacity: 0, y: reduz ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -12% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-line aspect-[4/5] max-w-md mx-auto lg:mx-0 w-full"
          >
            <Foto
              arquivo={fotos.equipe}
              alt={`${barbeiros.join(", ")} — equipe da ${site.nomeCompleto}`}
            >
              Foto da equipe
            </Foto>
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent"
              aria-hidden="true"
            />
            <p className="absolute bottom-5 left-6 right-6 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
              {barbeiros.join(" · ")}
            </p>
          </motion.div>

          {/* Cards dos barbeiros */}
          <motion.ul
            variants={lista}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -12% 0px" }}
            className="space-y-4"
          >
            {barbeiros.map((nome) => (
              <motion.li
                key={nome}
                variants={item}
                className="group flex flex-col sm:flex-row sm:items-center gap-5 rounded-3xl border border-line bg-ink-2 p-6 transition-colors hover:border-gold/50"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                  <span className="display text-2xl text-gold leading-none pt-1">
                    {nome.charAt(0)}
                  </span>
                </span>

                <div className="flex-1 min-w-0">
                  <h3 className="display text-2xl">{nome}</h3>
                  <p className="mt-1 text-sm text-white/55">
                    {BIOS[nome] || "Barbeiro da casa."}
                  </p>
                </div>

                <a
                  href={whatsappLink(
                    `Olá! Vim pelo site da ${site.nomeCompleto} e quero marcar um horário com o ${nome}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/75 transition-colors group-hover:border-gold group-hover:text-gold"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Reservar
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </Section>
  );
}
