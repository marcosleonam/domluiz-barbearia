import { Check } from "lucide-react";
import Section, { TituloSecao } from "./Section";
import Foto from "./Foto";
import { fotos, site, barbeiros } from "../config";

const PONTOS = [
  "Três barbeiros na casa: Otávio, Werlison e Elton — excelência em cada detalhe, do corte à barba.",
  "Barba italiana e barbear com toalha quente, o serviço que virou marca da Dom Luiz.",
  "Espaço infantil de verdade: cadeira de carrinho e espelho dos heróis pra criançada sentar numa boa.",
  "Nota 5,0 no Google com quem já sentou na cadeira.",
];

export default function Sobre() {
  return (
    <Section id="sobre" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <TituloSecao
              centro={false}
              eyebrow="A barbearia"
              titulo={site.nomeCompleto}
            />
            <p className="mt-6 text-white/65 leading-relaxed">
              No Jardim Eldorado, em {site.cidade}. A gente não faz corte
              apressado: cada cliente senta na cadeira, diz o que quer e sai com
              o visual pronto pra semana — barba alinhada, contorno limpo e
              aquele acabamento que só quem tem prática entrega.
            </p>

            {barbeiros.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-2">
                {barbeiros.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold"
                  >
                    {b}
                  </span>
                ))}
              </div>
            )}

            <ul className="mt-8 space-y-4">
              {PONTOS.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm md:text-base text-white/70 leading-relaxed">
                    {p}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#agendar"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_16px_44px_rgba(200,162,74,0.45)]"
            >
              Quero meu horário
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-line aspect-[4/5]">
                <Foto
                  arquivo={fotos.sobre}
                  alt={`Equipe de barbeiros da ${site.nomeCompleto}`}
                >
                  Foto da equipe
                </Foto>
              </div>
              <div
                className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl border border-gold/30 bg-ink hidden sm:flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="display text-3xl text-gold">
                  {site.monograma}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
