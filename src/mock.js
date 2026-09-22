export const siteInfo = {
  brand: "PRIME SERVIÇOS",
  shortBrand: "PRIME",
  tagline: "ELÉTRICA • TECNOLOGIA • MANUTENÇÃO",
  phone: "(31) 99544-2069",
  phoneRaw: "5531995442069",
  email: "matheuslouros74@mail.com",
  location: "Atendimento residencial, comercial e industrial",
  whatsappMessage: "Olá! Gostaria de solicitar um orçamento para um serviço da PRIME SERVIÇOS.",
};
export const navLinks = [
  { label: "Início", to: "/" },
  { label: "Serviços e Sobre", to: "/servicos" },
  { label: "Contato", to: "/contato" },
];
export const services = [
  { id:"residencial", icon:"home", title:"Elétrica Residencial", description:"Instalações, manutenção e melhorias elétricas para casas, apartamentos e pequenos comércios.", bullets:["Tomadas e interruptores","Iluminação e circuitos","Quadros e disjuntores","Manutenção e reparos"] },
  { id:"industrial", icon:"factory", title:"Elétrica Industrial", description:"Serviços elétricos para ambientes industriais, com foco em organização, segurança e manutenção.", bullets:["Infraestrutura elétrica","Organização de cabos","Painéis e circuitos","Manutenção elétrica"] },
  { id:"computadores", icon:"monitor", title:"Computação", description:"Montagem, manutenção, upgrades, configuração e organização de computadores e setups.", bullets:["Montagem de PC","Organização de cabos","Limpeza e manutenção","Upgrades e configuração"] },
];
export const galleries = {
 residencial:[
  {src:"/images/residencial/residencial-01.jpg",title:"Instalação elétrica residencial"},{src:"/images/residencial/residencial-02.jpg",title:"Manutenção de tomadas e interruptores"},{src:"/images/residencial/residencial-03.jpg",title:"Serviço elétrico residencial"},{src:"/images/residencial/residencial-04.jpg",title:"Acabamento e instalação"},{src:"/images/residencial/residencial-05.jpg",title:"Adequação elétrica"}],
 industrial:[
  {src:"/images/industrial/industrial-01.jpg",title:"Painel e instrumentação industrial"},{src:"/images/industrial/industrial-02.jpg",title:"Instrumentação e tubulação"},{src:"/images/industrial/industrial-03.jpg",title:"Manutenção industrial"},{src:"/images/industrial/industrial-04.jpg",title:"Painel elétrico industrial"},{src:"/images/industrial/industrial-05.jpg",title:"Comandos e alimentação"}],
 computadores:[
  {src:"/images/computadores/pc-01.jpg",title:"Setup completo"},{src:"/images/computadores/pc-02.jpg",title:"Montagem interna"},{src:"/images/computadores/pc-03.jpg",title:"PC com iluminação RGB"},{src:"/images/computadores/pc-04.jpg",title:"Configuração e testes"},{src:"/images/computadores/pc-05.jpg",title:"Montagem gamer"},{src:"/images/computadores/pc-06.jpg",title:"Organização e refrigeração"}]
};
export const computerGallery = galleries.computadores.map(x=>({...x,category:"Computação"}));
export const processSteps=[
 {number:"01",title:"Você chama",text:"Explique pelo WhatsApp qual serviço você precisa."},{number:"02",title:"Entendemos",text:"Avaliamos a necessidade e combinamos os detalhes."},{number:"03",title:"Executamos",text:"Realizamos o serviço com organização e atenção."},{number:"04",title:"Tudo pronto",text:"Você recebe o serviço finalizado e orientações."}
];
