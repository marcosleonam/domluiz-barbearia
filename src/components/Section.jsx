import { motion } from "framer-motion";

// Wrapper com reveal on-scroll. Usado por todas as seções.
export default function Section({ id, className = "", children, delay = 0 }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// Cabeçalho padrão de seção (eyebrow + título + linha dourada).
export function TituloSecao({ eyebrow, titulo, sub, centro = true }) {
  return (
    <div className={centro ? "text-center" : ""}>
      {eyebrow && (
        <span className="text-gold font-semibold uppercase tracking-[0.24em] text-xs md:text-sm">
          {eyebrow}
        </span>
      )}
      <h2 className="display mt-3 text-4xl md:text-5xl lg:text-6xl">{titulo}</h2>
      <div
        className={`mt-5 h-px w-16 bg-gold ${centro ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {sub && (
        <p
          className={`mt-6 text-white/60 text-base md:text-lg ${
            centro ? "mx-auto" : ""
          } max-w-2xl`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
