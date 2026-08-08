// Logo oficial do Instagram (glifo da câmera sobre o gradiente da marca).
// Cada instância recebe um id próprio pro gradiente — ids repetidos quebram o
// preenchimento em alguns navegadores.
let contador = 0;

export default function IconeInstagram({ className = "h-6 w-6" }) {
  const id = `ig-grad-${(contador += 1)}`;

  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Instagram"
    >
      <defs>
        <radialGradient id={id} cx="0.32" cy="1.05" r="1.25">
          <stop offset="0" stopColor="#FED576" />
          <stop offset="0.26" stopColor="#F47133" />
          <stop offset="0.61" stopColor="#BC3081" />
          <stop offset="1" stopColor="#4C63D2" />
        </radialGradient>
      </defs>

      <rect width="48" height="48" rx="14" fill={`url(#${id})`} />
      <g fill="none" stroke="#fff" strokeWidth="3.2">
        <rect x="12" y="12" width="24" height="24" rx="7.5" />
        <circle cx="24" cy="24" r="6" />
      </g>
      <circle cx="31.6" cy="16.4" r="2" fill="#fff" />
    </svg>
  );
}
