import { fotoUrl, site } from "../config";

// Mostra a foto real quando o arquivo está configurado em config.js.
// Enquanto não estiver, renderiza um bloco gráfico da marca (monograma +
// listras de barbeiro) — parece intencional, não parece site quebrado.
export default function Foto({ arquivo, alt, className = "", children }) {
  const url = fotoUrl(arquivo);

  if (url) {
    return (
      <img
        src={url}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative w-full h-full overflow-hidden bg-ink-2 grain flex items-center justify-center ${className}`}
    >
      <div
        className="absolute inset-x-0 top-0 h-1.5 barber-pole opacity-70"
        aria-hidden="true"
      />
      <div className="text-center px-4">
        <span className="display block text-5xl md:text-6xl text-gold/35 tracking-[0.12em]">
          {site.monograma}
        </span>
        {children && (
          <span className="mt-2 block text-[11px] uppercase tracking-[0.22em] text-white/25">
            {children}
          </span>
        )}
      </div>
      <div
        className="absolute inset-0 ring-1 ring-inset ring-white/5"
        aria-hidden="true"
      />
    </div>
  );
}
