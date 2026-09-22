export const siteInfo = {
  brand: "PRIME SERVIÇOS",
  shortBrand: "PRIME",
  tagline: "ELÉTRICA • TECNOLOGIA • MANUTENÇÃO",
  phone: "(31) 99544-2069",
  phoneRaw: "5531995442069",
  location: "Atendimento residencial, comercial e industrial",
  whatsappMessage: "Olá! Gostaria de solicitar um orçamento para um serviço da PRIME SERVIÇOS.",
};

export const navLinks = [
  { label: "Início", to: "/" },
  { label: "Serviços", to: "/servicos" },
  { label: "Sobre", to: "/sobre-nos" },
  { label: "Contato", to: "/contato" },
];

export const services = [
  {
    id: "residencial",
    icon: "home",
    title: "Elétrica Residencial",
    description: "Instalações, manutenção e melhorias elétricas para casas, apartamentos e pequenos comércios.",
    bullets: ["Tomadas e interruptores", "Iluminação e circuitos", "Quadros e disjuntores", "Manutenção e reparos"],
  },
  {
    id: "industrial",
    icon: "factory",
    title: "Elétrica Industrial",
    description: "Serviços elétricos para ambientes industriais, buscando organização, segurança e execução cuidadosa.",
    bullets: ["Infraestrutura elétrica", "Organização de cabos", "Painéis e circuitos", "Manutenção elétrica"],
  },
  {
    id: "computadores",
    icon: "monitor",
    title: "Montagem de Computadores",
    description: "Montagem, organização e manutenção de computadores para trabalho, estudos e alto desempenho.",
    bullets: ["Montagem de PC", "Organização de cabos", "Limpeza e manutenção", "Upgrades e configuração"],
  },
];

export const computerGallery = [
  { src: "/images/computadores/pc-01.jpg", title: "Montagem e organização interna", category: "Computadores" },
  { src: "/images/computadores/pc-02.jpg", title: "Setup com iluminação RGB", category: "Computadores" },
  { src: "/images/computadores/pc-03.jpg", title: "PC gamer com refrigeração", category: "Computadores" },
  { src: "/images/computadores/pc-04.jpg", title: "Configuração e testes", category: "Computadores" },
  { src: "/images/computadores/pc-05.jpg", title: "Setup completo", category: "Computadores" },
];

export const processSteps = [
  { number: "01", title: "Você chama", text: "Explique pelo WhatsApp qual serviço você precisa." },
  { number: "02", title: "Entendemos", text: "Avaliamos a necessidade e combinamos os detalhes." },
  { number: "03", title: "Executamos", text: "Realizamos o serviço com organização e atenção." },
  { number: "04", title: "Tudo pronto", text: "Você recebe o serviço finalizado e orientações." },
];
