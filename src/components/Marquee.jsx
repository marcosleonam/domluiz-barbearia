const PALAVRAS = [
  "Corte na régua",
  "Barba terapia",
  "Degradê",
  "Freestyle",
  "Sobrancelha",
  "Pigmentação",
  "Platinado",
  "Toalha quente",
  "Hora marcada",
];

export default function Marquee() {
  const linha = [...PALAVRAS, ...PALAVRAS];
  return (
    <div className="border-y border-line bg-ink-2 py-4 overflow-hidden">
      <div className="marquee-track">
        {linha.map((p, i) => (
          <span
            key={i}
            className="display mx-6 text-2xl md:text-3xl text-white/25 tracking-wide"
          >
            {p}
            <span className="text-gold mx-6">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
