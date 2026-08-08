import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Instagram, Star, X, Maximize2 } from "lucide-react";
import Section, { TituloSecao } from "./Section";
import Foto from "./Foto";
import { fotos, site, avaliacoes, fotoUrl } from "../config";

const lista = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function Galeria() {
  const reduz = useReducedMotion();
  const [aberta, setAberta] = useState(null);

  const item = {
    hidden: { opacity: 0, y: reduz ? 0 : 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  // ESC fecha o lightbox e trava o scroll do fundo enquanto está aberto.
  useEffect(() => {
    if (aberta === null) return;
    const onKey = (e) => e.key === "Escape" && setAberta(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [aberta]);

  return (
    <Section id="galeria" className="py-20 md:py-28 bg-ink-2/40">
      <div className="max-w-6xl mx-auto px-6">
        <TituloSecao
          eyebrow="Trabalhos"
          titulo="Nossa régua"
          sub="Um pouco do que sai da cadeira todo dia."
        />

        <motion.div
          variants={lista}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
        >
          {fotos.galeria.map((f, i) => (
            <motion.button
              key={f.arquivo + i}
              variants={item}
              type="button"
              onClick={() => setAberta(i)}
              aria-label={`Ampliar foto: ${f.alt}`}
              className="group relative overflow-hidden rounded-2xl border border-line aspect-[4/5]"
            >
              <Foto
                arquivo={f.arquivo}
                alt={f.alt}
                className="transition-transform duration-700 group-hover:scale-110"
              >
                {`Foto ${i + 1}`}
              </Foto>
              <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Maximize2 className="h-3.5 w-3.5" />
                Ampliar
              </span>
            </motion.button>
          ))}

          {/* Card de avaliação do Google */}
          <motion.div
            variants={item}
            className="flex flex-col justify-center rounded-2xl border border-gold/30 bg-ink-2 p-5 sm:p-6 sm:aspect-[4/5]"
          >
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
          </motion.div>

          {/* Card do Instagram fecha o grid */}
          <motion.a
            variants={item}
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-ink-2 p-5 sm:p-6 sm:aspect-[4/5] text-center transition-colors hover:border-gold/60"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-ink-3 text-gold transition-colors group-hover:border-gold/50">
              <Instagram className="h-6 w-6" />
            </span>
            <p className="display text-2xl">Tem mais lá</p>
            <p className="hidden sm:block text-sm text-white/50 break-words">
              {site.instagramHandle}
            </p>
            <span className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-gold">
              Ver no Instagram →
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {aberta !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setAberta(null)}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setAberta(null)}
              aria-label="Fechar"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-ink-2 text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              key={aberta}
              src={fotoUrl(fotos.galeria[aberta].arquivo)}
              alt={fotos.galeria[aberta].alt}
              initial={{ scale: reduz ? 1 : 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[86vh] w-auto max-w-full rounded-2xl border border-line object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
