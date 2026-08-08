import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { MessageCircle, Star, Clock, MapPin } from "lucide-react";
import { site, fotos, fotoUrl, whatsappLink } from "../config";

export default function Hero() {
  const ref = useRef(null);
  const reduz = useReducedMotion();
  const bg = fotoUrl(fotos.hero);

  // Hooks sempre rodam; o movimento é anulado depois se o usuário pediu menos animação.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const suave = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });
  const yFundo = useTransform(suave, [0, 1], ["0%", "18%"]);
  const escalaFundo = useTransform(suave, [0, 1], [1, 1.12]);
  const yTexto = useTransform(suave, [0, 1], [0, -110]);
  const opacidadeTexto = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const estiloFundo = reduz ? {} : { y: yFundo, scale: escalaFundo };
  const estiloTexto = reduz ? {} : { y: yTexto, opacity: opacidadeTexto };

  return (
    <section
      id="topo"
      ref={ref}
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Fundo com parallax */}
      <div className="absolute inset-0" aria-hidden="true">
        <motion.div
          style={{ ...estiloFundo, willChange: "transform" }}
          className="absolute inset-0 -top-[10%] h-[120%]"
        >
          {bg ? (
            <img
              src={bg}
              alt=""
              className="h-full w-full object-cover"
              fetchpriority="high"
            />
          ) : (
            <div className="h-full w-full bg-ink grain" />
          )}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/80 to-ink" />
      </div>

      <motion.div
        style={estiloTexto}
        className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 md:pt-32 md:pb-24 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: reduz ? 0 : 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <MapPin className="h-3.5 w-3.5" />
              Jardim Eldorado · {site.cidade}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/70 px-4 py-2 text-[11px] md:text-xs font-semibold text-white/80 backdrop-blur">
              <Star className="h-3.5 w-3.5 fill-gold text-gold" />
              {site.nota} no Google · {site.qtdAvaliacoes} avaliações
            </span>
          </div>

          <h1 className="display mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl leading-[1.02]">
            Se todo corte parece igual, você ainda não encontrou o{" "}
            <span className="text-gold">barbeiro certo</span>.
          </h1>

          <p className="mt-7 max-w-xl text-base md:text-lg text-white/70 leading-relaxed">
            Aqui, cada detalhe é pensado para combinar com seu estilo, seu rosto
            e sua personalidade.
          </p>

          <p className="mt-4 max-w-xl text-base md:text-lg font-semibold text-gold">
            Seu próximo corte pode ser o melhor até agora.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#agendar"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_16px_44px_rgba(200,162,74,0.45)] hover:scale-[1.02]"
            >
              Reservar meu horário
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-ink-2/70 px-8 py-4 text-sm font-semibold text-white/85 backdrop-blur transition-colors hover:border-gold/60 hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>

          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            {[
              { icone: Clock, titulo: "Hora marcada", texto: "Sem esperar a vez" },
              { icone: Star, titulo: "Barba italiana", texto: "Toalha quente e navalha" },
              { icone: MessageCircle, titulo: "Reserva rápida", texto: "Direto no WhatsApp" },
            ].map((item) => (
              <li
                key={item.titulo}
                className="flex items-center gap-3 rounded-2xl border border-line bg-ink-2/60 px-4 py-3 backdrop-blur"
              >
                <item.icone className="h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-bold leading-tight">{item.titulo}</p>
                  <p className="text-xs text-white/50">{item.texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-1.5 barber-pole" aria-hidden="true" />
    </section>
  );
}
