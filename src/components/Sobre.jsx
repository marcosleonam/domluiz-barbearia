import { Check, Scissors } from "lucide-react";
import Section, { TituloSecao } from "./Section";
import { site, barbeiros } from "../config";

const PONTOS = [
  "Três barbeiros na casa — excelência em cada detalhe, do corte à barba.",
  "Barba terapia com toalha quente e navalha — o serviço que virou marca da Dom Luiz.",
  "Espaço infantil de verdade: cadeira de carrinho e espelho dos heróis pra criançada sentar numa boa.",
  "Nota 5,0 no Google com quem já sentou na cadeira.",
];

export default function Sobre() {
  return (
    <Section id="sobre" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
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

          {/* Painel editorial dourado — sem foto, pra não repetir imagem no site */}
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-ink-2 grain p-8 md:p-12">
            <div
              className="absolute inset-x-0 top-0 h-1.5 barber-pole"
              aria-hidden="true"
            />
            <Scissors className="h-8 w-8 text-gold" />
            <p className="display mt-7 text-4xl md:text-5xl leading-[0.95]">
              Aqui ninguém
              <br />
              sai <span className="text-gold">no meio</span>
              <br />
              do corte.
            </p>
            <p className="mt-6 text-white/60 leading-relaxed">
              Hora marcada de verdade. Você chega, senta e é atendido — sem
              perder a tarde esperando a vez numa fila de cadeira.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Barbeiros
                </dt>
                <dd className="display mt-2 text-4xl text-gold">
                  {barbeiros.length}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Nota no Google
                </dt>
                <dd className="display mt-2 text-4xl text-gold">{site.nota}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}
