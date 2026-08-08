import { MapPin, Clock, Phone, Instagram } from "lucide-react";
import Section, { TituloSecao } from "./Section";
import { site, horarios, whatsappLink } from "../config";

export default function Local() {
  return (
    <Section id="local" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <TituloSecao
          eyebrow="Onde e quando"
          titulo="Horários & contato"
          sub={`Estamos em ${site.cidade}. Chegou a hora do corte, é só chamar.`}
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Horários */}
          <div className="rounded-3xl border border-line bg-ink-2 p-7 md:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-ink-3 text-gold">
                <Clock className="h-5 w-5" />
              </span>
              <h3 className="display text-2xl md:text-3xl">Funcionamento</h3>
            </div>

            <ul className="mt-7 divide-y divide-line">
              {horarios.map((h) => (
                <li
                  key={h.dia}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <span className="text-sm md:text-base text-white/75">
                    {h.dia}
                  </span>
                  <span
                    className={`text-sm md:text-base font-semibold ${
                      h.fechado ? "text-white/35" : "text-gold"
                    }`}
                  >
                    {h.hora}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato / endereço */}
          <div className="rounded-3xl border border-line bg-ink-2 p-7 md:p-9 flex flex-col">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-ink-3 text-gold">
                <MapPin className="h-5 w-5" />
              </span>
              <h3 className="display text-2xl md:text-3xl">Contato</h3>
            </div>

            <div className="mt-7 space-y-5">
              {site.endereco && (
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                    Endereço
                  </p>
                  <p className="mt-1 text-white/80">
                    {site.endereco}
                    {site.bairro && ` — ${site.bairro}`}
                  </p>
                  {site.mapsUrl && (
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-soft"
                    >
                      Abrir no Google Maps <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              )}

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  WhatsApp
                </p>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 text-lg font-bold text-white hover:text-gold transition-colors"
                >
                  <Phone className="h-4 w-4 text-gold" />
                  {site.whatsappDisplay}
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  Instagram
                </p>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 font-semibold text-white/80 hover:text-gold transition-colors"
                >
                  <Instagram className="h-4 w-4 text-gold" />
                  {site.instagramHandle}
                </a>
              </div>
            </div>

            <a
              href="#agendar"
              className="mt-auto pt-8 block"
            >
              <span className="block rounded-full bg-gold px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:bg-gold-soft">
                Reservar horário
              </span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
