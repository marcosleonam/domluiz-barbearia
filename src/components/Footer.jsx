import { Instagram, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "../config";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink">
      <div className="h-1.5 barber-pole" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60">
                <span className="display text-gold text-lg leading-none pt-0.5">
                  {site.monograma}
                </span>
              </span>
              <span className="display text-2xl">
                {site.nomeCompleto}
                <span className="text-gold">.</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-white/45 max-w-sm">
              {site.slogan}. Corte, barba e acabamento com hora marcada.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-zap px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" />
              {site.whatsappDisplay}
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-gold/60 hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">
            © {ano} {site.nomeCompleto} — {site.cidade}
          </p>
          <p className="text-xs text-white/25">
            Feito por{" "}
            <a
              href="https://marcosleonam.github.io/venda-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-gold transition-colors"
            >
              Marcos Leonam
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
