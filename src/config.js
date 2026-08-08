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
  // Link curto do perfil no Google Maps (enviado pelo cliente).
  mapsUrl: "https://maps.app.goo.gl/vTJRZC31U7mdNYQ58",
  // Mapa embutido — não precisa de chave de API.
  mapsEmbed:
    "https://www.google.com/maps?q=Dom+Luiz+Barbearia%2C+Av.+Oito%2C+45+-+Jardim+Eldorado%2C+S%C3%A3o+Lu%C3%ADs+-+MA%2C+65065-750&output=embed",

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

// Lista oficial da barbearia (arte "NOSSOS SERVIÇOS" enviada pelo cliente).
// destaque: true => vira card grande na seção. Os demais entram na lista completa.
// Todos aparecem no seletor do agendamento.
export const servicos = [
  {
    id: "corte",
    nome: "Corte masculino",
    desc: "Máquina, tesoura, degradê e navalha no acabamento.",
    preco: "",
    icone: "scissors",
    destaque: true,
  },
  {
    id: "barba-terapia",
    nome: "Barba terapia",
    desc: "Toalha quente, navalha, massagem e desenho da barba.",
    preco: "",
    icone: "flame",
    destaque: true,
  },
  {
    id: "infantil",
    nome: "Corte infantil",
    desc: "Cadeira de carrinho e espelho dos heróis — a criançada senta numa boa.",
    preco: "",
    icone: "smile",
    destaque: true,
  },
  {
    id: "sobrancelha",
    nome: "Sobrancelha",
    desc: "Design masculino no acabamento certo do olhar.",
    preco: "",
    icone: "eye",
    destaque: true,
  },
  {
    id: "botox",
    nome: "Botox capilar",
    desc: "Alinha, dá brilho e controla o volume do cabelo.",
    preco: "",
    icone: "flask",
    destaque: true,
  },
  {
    id: "platinado",
    nome: "Platinado",
    desc: "Descoloração completa com o tom fechado do jeito certo.",
    preco: "",
    icone: "snow",
    destaque: true,
  },
  { id: "pezinho", nome: "Pezinho", desc: "Acabamento entre um corte e outro.", preco: "", icone: "ruler" },
  { id: "penteado", nome: "Penteado", desc: "Finalização pro dia ou pro evento.", preco: "", icone: "wind" },
  { id: "hidratacao", nome: "Hidratação", desc: "Repõe o que o sol e a química tiram.", preco: "", icone: "droplet" },
  { id: "limpeza", nome: "Limpeza facial", desc: "Pele limpa, sem cravo e sem oleosidade.", preco: "", icone: "sparkles" },
  { id: "pigmentacao", nome: "Pigmentação", desc: "Preenche falhas na barba e no contorno.", preco: "", icone: "brush" },
  { id: "luzes", nome: "Luzes", desc: "Mechas pra dar volume e movimento.", preco: "", icone: "sun" },
  { id: "selagem", nome: "Selagem", desc: "Reduz o volume e sela o fio.", preco: "", icone: "layers" },
  { id: "depilacao-nasal", nome: "Depilação nasal", desc: "Rápido, e faz diferença no acabamento.", preco: "", icone: "feather" },
  { id: "freestyle", nome: "Freestyle", desc: "Risco, desenho e detalhe feito na navalha.", preco: "", icone: "pen" },
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
  // A foto da equipe aparece SÓ na seção "A equipe".
  equipe: "equipe.jpg",
  galeria: [
    { arquivo: "corte-degrade.jpg", alt: "Corte com degradê feito na Dom Luiz Barbearia" },
    { arquivo: "barba-italiana.jpg", alt: "Barba italiana desenhada na Dom Luiz Barbearia" },
    { arquivo: "toalha-quente.jpg", alt: "Barbear com toalha quente na Dom Luiz Barbearia" },
    { arquivo: "interior.jpg", alt: "Salão da Dom Luiz Barbearia com espaço infantil" },
  ],
};

// Logo oficial (extraída da arte do cliente, fundo transparente).
export const logoUrl = `${import.meta.env.BASE_URL}logo-domluiz.png`;

export const fotoUrl = (arquivo) =>
  arquivo ? `${import.meta.env.BASE_URL}fotos/${arquivo}` : "";

// Link de WhatsApp com a mensagem padrão embutida.
export const whatsappLink = (mensagem) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    mensagem || site.mensagemWhatsApp
  )}`;
