// Abertura do site: uma tesoura dourada fecha a lâmina, o corte desce pela tela
// e as duas metades se abrem revelando a página. Tudo em SVG/CSS — sem vídeo,
// sem arquivo pesado, carrega instantâneo.
//
// Toca uma vez por sessão. Respeita prefers-reduced-motion. Tem botão de pular.
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { logoUrl } from "../config";

const CHAVE = "dl_intro_visto";

export default function Intro() {
  const [ativo, setAtivo] = useState(() => {
    if (typeof window === "undefined") return false;
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const jaViu = sessionStorage.getItem(CHAVE) === "1";
    return !reduz && !jaViu;
  });

  useEffect(() => {
    if (!ativo) return;
    sessionStorage.setItem(CHAVE, "1");
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setAtivo(false), 2600);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [ativo]);

  useEffect(() => {
    if (!ativo) document.body.style.overflow = "";
  }, [ativo]);

  const metade = (lado) => ({
    inicial: { x: 0 },
    fim: {
      x: lado === "esq" ? "-100%" : "100%",
      transition: { duration: 0.75, delay: 1.55, ease: [0.76, 0, 0.24, 1] },
    },
  });

  return (
    <AnimatePresence>
      {ativo && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none"
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          aria-hidden="true"
        >
          {/* Metades que se abrem */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-ink grain"
            variants={metade("esq")}
            initial="inicial"
            animate="fim"
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-ink grain"
            variants={metade("dir")}
            initial="inicial"
            animate="fim"
          />

          {/* Linha do corte descendo pelo meio */}
          <motion.div
            className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 origin-top bg-gold"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{
              scaleY: [0, 1, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.2,
              delay: 0.85,
              times: [0, 0.55, 1],
              ease: "easeInOut",
            }}
            style={{ boxShadow: "0 0 18px rgba(200,162,74,0.9)" }}
          />

          {/* Tesoura: aparece em cima, fecha a lâmina e desce cortando a tela */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.85, y: -180 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.85, 1, 1, 1],
              y: [-180, -180, 190, 190],
            }}
            transition={{
              duration: 1.95,
              times: [0, 0.18, 0.72, 1],
              ease: ["easeOut", "linear", "easeIn"],
            }}
          >
            <Tesoura />
          </motion.div>

          {/* Logo que aparece no meio do corte e some junto */}
          <motion.img
            src={logoUrl}
            alt=""
            className="absolute left-1/2 top-1/2 w-52 md:w-64 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: [0, 0, 1, 0], scale: [0.94, 0.94, 1, 1.04] }}
            transition={{ duration: 1.9, times: [0, 0.28, 0.6, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Tesoura() {
  // Cada lâmina gira em torno do parafuso central (28,64) até fechar.
  const lamina = (abertura) => ({
    initial: { rotate: abertura },
    animate: { rotate: 0 },
    transition: { duration: 0.55, delay: 0.35, ease: [0.65, 0, 0.35, 1] },
  });

  return (
    <svg
      width="132"
      height="132"
      viewBox="0 0 112 112"
      fill="none"
      stroke="#C8A24A"
      strokeWidth="3.4"
      strokeLinecap="round"
    >
      {/* Lâmina esquerda */}
      <motion.g style={{ originX: "56px", originY: "72px" }} {...lamina(-16)}>
        <line x1="56" y1="72" x2="26" y2="18" />
        <circle cx="42" cy="94" r="11" />
        <line x1="56" y1="72" x2="47" y2="85" />
      </motion.g>

      {/* Lâmina direita */}
      <motion.g style={{ originX: "56px", originY: "72px" }} {...lamina(16)}>
        <line x1="56" y1="72" x2="86" y2="18" />
        <circle cx="70" cy="94" r="11" />
        <line x1="56" y1="72" x2="65" y2="85" />
      </motion.g>

      {/* Parafuso */}
      <circle cx="56" cy="72" r="3.2" fill="#C8A24A" stroke="none" />
    </svg>
  );
}
