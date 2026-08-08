import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site, whatsappLink } from "../config";

const LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#sobre", label: "A barbearia" },
  { href: "#local", label: "Horários" },
];

export default function Nav() {
  const [aberto, setAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fechar = () => setAberto(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <a href="#topo" className="flex items-center gap-3" onClick={fechar}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/60">
            <span className="display text-gold text-lg leading-none pt-0.5">
              {site.monograma}
            </span>
          </span>
          <span className="display text-xl md:text-2xl tracking-wide">
            {site.nome}
            <span className="text-gold">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-white/70 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#agendar"
          className="hidden md:inline-flex items-center rounded-full bg-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_12px_34px_rgba(200,162,74,0.4)]"
        >
          Reservar horário
        </a>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
          className="md:hidden flex h-11 w-11 items-center justify-center rounded-lg border border-line text-white"
        >
          {aberto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {aberto && (
        <div className="md:hidden border-t border-line bg-ink/98 backdrop-blur-md">
          <ul className="max-w-6xl mx-auto px-6 py-4 space-y-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={fechar}
                  className="block py-3 text-base font-medium text-white/80 hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2 space-y-3">
              <a
                href="#agendar"
                onClick={fechar}
                className="block rounded-full bg-gold px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-black"
              >
                Reservar horário
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={fechar}
                className="block rounded-full border border-line px-6 py-4 text-center text-sm font-semibold text-white/80"
              >
                Chamar no WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
