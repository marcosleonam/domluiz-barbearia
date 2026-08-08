// Agendamento SEM backend: o cliente preenche, e ao enviar abre o WhatsApp da
// barbearia com o pedido de reserva já formatado. O "sistema" é a conversa.
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CalendarClock } from "lucide-react";
import Section, { TituloSecao } from "./Section";
import { site, servicos, barbeiros, faixasHorario } from "../config";

const campoBase =
  "w-full rounded-xl border border-line bg-ink px-4 py-3 text-white placeholder:text-white/30 " +
  "focus:outline-none focus:border-gold transition-colors";

// Data mínima do seletor = hoje (evita reserva no passado).
const hojeISO = () => {
  const d = new Date();
  const off = d.getTimezoneOffset();
  return new Date(d.getTime() - off * 60000).toISOString().slice(0, 10);
};

const formatarData = (iso) => {
  if (!iso) return "";
  const [a, m, d] = iso.split("-");
  return `${d}/${m}/${a}`;
};

export default function Agendamento() {
  const [f, setF] = useState({
    nome: "",
    telefone: "",
    servico: servicos[0]?.nome || "",
    barbeiro: "",
    data: "",
    horario: faixasHorario[0] || "",
    obs: "",
  });

  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const enviar = (e) => {
    e.preventDefault();
    const linha = (label, val) => (val ? `${label}: ${val}\n` : "");
    let msg = "✂️ *RESERVA DE HORÁRIO — SITE*\n\n";
    msg += linha("Nome", f.nome);
    msg += linha("Telefone", f.telefone);
    msg += linha("Serviço", f.servico);
    msg += linha("Barbeiro", f.barbeiro);
    msg += linha("Dia", formatarData(f.data));
    msg += linha("Horário", f.horario);
    msg += linha("Observação", f.obs);
    msg += "\nPode confirmar pra mim?";

    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Section id="agendar" className="py-20 md:py-28 bg-ink-2/40">
      <div className="max-w-3xl mx-auto px-6">
        <TituloSecao
          eyebrow="Reserve agora"
          titulo="Marque seu horário"
          sub="Preenche em 30 segundos. Ao enviar, abre o WhatsApp da barbearia com seu pedido pronto — é só apertar enviar e esperar a confirmação."
        />

        <motion.form
          onSubmit={enviar}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-3xl border border-line bg-ink-2 p-6 md:p-10 space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Campo label="Seu nome" required>
              <input
                className={campoBase}
                value={f.nome}
                onChange={set("nome")}
                placeholder="Como te chamam"
                required
              />
            </Campo>

            <Campo label="Seu WhatsApp" required>
              <input
                className={campoBase}
                value={f.telefone}
                onChange={set("telefone")}
                placeholder="(98) 90000-0000"
                inputMode="tel"
                required
              />
            </Campo>
          </div>

          <Campo label="Serviço" required>
            <select
              className={campoBase}
              value={f.servico}
              onChange={set("servico")}
              required
            >
              {servicos.map((s) => (
                <option key={s.id} value={s.nome} className="bg-ink">
                  {s.nome}
                </option>
              ))}
              <option value="Outro (explico no WhatsApp)" className="bg-ink">
                Outro (explico no WhatsApp)
              </option>
            </select>
          </Campo>

          {barbeiros.length > 0 && (
            <Campo label="Barbeiro (opcional)">
              <select
                className={campoBase}
                value={f.barbeiro}
                onChange={set("barbeiro")}
              >
                <option value="" className="bg-ink">
                  Tanto faz — quem estiver livre
                </option>
                {barbeiros.map((b) => (
                  <option key={b} value={b} className="bg-ink">
                    {b}
                  </option>
                ))}
              </select>
            </Campo>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Campo label="Dia" required>
              <input
                type="date"
                className={`${campoBase} [color-scheme:dark]`}
                value={f.data}
                onChange={set("data")}
                min={hojeISO()}
                required
              />
            </Campo>

            <Campo label="Horário" required>
              <select
                className={campoBase}
                value={f.horario}
                onChange={set("horario")}
                required
              >
                {faixasHorario.map((h) => (
                  <option key={h} value={h} className="bg-ink">
                    {h}
                  </option>
                ))}
              </select>
            </Campo>
          </div>

          <Campo label="Alguma observação?">
            <textarea
              className={`${campoBase} min-h-[90px] resize-y`}
              value={f.obs}
              onChange={set("obs")}
              placeholder="Ex: degradê na zero, barba desenhada..."
            />
          </Campo>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm md:text-base font-bold uppercase tracking-[0.12em] text-black transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_14px_44px_rgba(200,162,74,0.45)]"
          >
            <CalendarClock className="h-4 w-4" />
            Reservar pelo WhatsApp
            <Send className="h-4 w-4" />
          </button>

          <p className="text-center text-xs text-white/40">
            A reserva só é confirmada pela barbearia na conversa do WhatsApp.
          </p>
        </motion.form>
      </div>
    </Section>
  );
}

function Campo({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-white/80">
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      {children}
    </label>
  );
}
