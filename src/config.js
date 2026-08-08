// ── src/config.js — FONTE ÚNICA DE VERDADE DO CLIENTE ─────────────────────────
// Tudo que muda (telefone, horários, serviços, fotos) está AQUI.
// Nenhum componente escreve telefone/link direto.
//
// Dados confirmados via perfil do Google (Dom Luiz barbearia) e Instagram.
// ⚠️ AINDA A CONFIRMAR COM O CLIENTE:
//    - horários por dia da semana (o Google só mostra "fecha 19:00")
//    - tabela de preços (hoje oculta: mostrarPrecos = false)

export const site = {
  nome: "Dom Luiz",
  nomeCompleto: "Dom Luiz Barbearia",
  monograma: "DL",
  slogan: "Barbearia no Jardim Eldorado",
  cidade: "São Luís/MA",

  // WhatsApp: DDI + DDD + número, só dígitos.
  whatsapp: "5598985178824",
  whatsappDisplay: "(98) 98517-8824",

  instagram: "https://instagram.com/domluizbarbeariaslz",
  instagramHandle: "@domluizbarbeariaslz",

  endereco: "Av. Oito, 45 — Jardim Eldorado",
  bairro: "São Luís/MA, 65065-750",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dom+Luiz+barbearia+Av.+Oito+45+Jardim+Eldorado+S%C3%A3o+Lu%C3%ADs+MA",

  // Nota do perfil do Google.
  nota: "5,0",
  qtdAvaliacoes: 12,

  // Mensagem padrão dos botões de WhatsApp (fora do formulário).
  mensagemWhatsApp:
    "Olá! Vim pelo site da Dom Luiz Barbearia e quero reservar um horário.",
};

// ⚠️ CONFIRMAR: o Google só informa o fechamento às 19h.
export const horarios = [
  { dia: "Segunda a Sexta", hora: "09h às 19h" },
  { dia: "Sábado", hora: "09h às 19h" },
  { dia: "Domingo", hora: "Fechado", fechado: true },
];

// Preços ficam ocultos até o cliente confirmar a tabela.
// Troque para true e preencha "preco" em cada serviço para exibir.
export const mostrarPrecos = false;

export const servicos = [
  {
    id: "corte",
    nome: "Corte de cabelo",
    desc: "Máquina, tesoura, degradê e navalha no acabamento.",
    preco: "",
    icone: "scissors",
    destaque: true,
  },
  {
    id: "barba",
    nome: "Barba italiana",
    desc: "Desenho, contorno e finalização do jeito que virou marca da casa.",
    preco: "",
    icone: "razor",
    destaque: true,
  },
  {
    id: "toalha",
    nome: "Barbear com toalha quente",
    desc: "Toalha quente, navalha e pele descansada no fim.",
    preco: "",
    icone: "flame",
  },
  {
    id: "combo",
    nome: "Corte + Barba",
    desc: "O combo completo: sai pronto pra semana inteira.",
    preco: "",
    icone: "crown",
  },
  {
    id: "botox",
    nome: "Botox capilar",
    desc: "Tratamento pra alinhar, dar brilho e controlar o volume.",
    preco: "",
    icone: "brush",
  },
  {
    id: "infantil",
    nome: "Corte infantil",
    desc: "Cadeira de carrinho e espelho dos heróis — a criançada senta numa boa.",
    preco: "",
    icone: "smile",
  },
];

// Barbeiros da casa (confirmados no post da equipe).
export const barbeiros = ["Otávio", "Werlison", "Elton"];

// Faixas de horário oferecidas no agendamento.
export const faixasHorario = [
  "Manhã (09h – 12h)",
  "Início da tarde (12h – 15h)",
  "Fim da tarde (15h – 17h)",
  "Fim do dia (17h – 19h)",
];

// Avaliações reais do perfil do Google.
export const avaliacoes = [
  {
    texto:
      "Vale a pena, o cara é bravo no corte. Atendimento nota 10.",
    autor: "Cliente no Google",
  },
  {
    texto:
      "Ambiente incrível, atendimento excelente e os serviços são maravilhosos!",
    autor: "Cliente no Google",
  },
];

// ── FOTOS ────────────────────────────────────────────────────────────────────
// Arquivos ficam em  public/fotos/  — para trocar, basta substituir o arquivo
// mantendo o mesmo nome (ou apontar um novo nome aqui) e rodar npm run build.
export const fotos = {
  hero: "interior.jpg",
  sobre: "equipe.jpg",
  galeria: [
    { arquivo: "corte-degrade.jpg", alt: "Corte com degradê feito na Dom Luiz Barbearia" },
    { arquivo: "barba-italiana.jpg", alt: "Barba italiana desenhada na Dom Luiz Barbearia" },
    { arquivo: "toalha-quente.jpg", alt: "Barbear com toalha quente na Dom Luiz Barbearia" },
    { arquivo: "interior.jpg", alt: "Salão da Dom Luiz Barbearia com espaço infantil" },
    { arquivo: "equipe.jpg", alt: "Equipe de barbeiros da Dom Luiz Barbearia" },
  ],
};

export const fotoUrl = (arquivo) =>
  arquivo ? `${import.meta.env.BASE_URL}fotos/${arquivo}` : "";

// Link de WhatsApp com a mensagem padrão embutida.
export const whatsappLink = (mensagem) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    mensagem || site.mensagemWhatsApp
  )}`;
