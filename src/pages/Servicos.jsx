import React from "react";
import { Factory, Home as HomeIcon, Monitor, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { services, siteInfo } from "../mock";

const icons = { home: HomeIcon, factory: Factory, monitor: Monitor };

export default function Servicos() {
  const whatsapp = `https://wa.me/${siteInfo.phoneRaw}?text=${encodeURIComponent(siteInfo.whatsappMessage)}`;
  return <main className="page-shell section-light">
    <div className="container page-hero"><span className="section-kicker">PRIME SERVIÇOS</span><h1>Serviços elétricos e tecnologia.</h1><p>Escolha uma categoria para entender o que podemos fazer pelo seu ambiente, instalação ou computador.</p></div>
    <div className="container service-page-grid">
      {services.map((service, index) => { const Icon = icons[service.icon]; return <article className="big-service-card" key={service.id}><div className="big-service-top"><span className="service-icon"><Icon /></span><span>0{index + 1}</span></div><h2>{service.title}</h2><p>{service.description}</p><ul>{service.bullets.map((b) => <li key={b}><CheckCircle2 />{b}</li>)}</ul><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-dark"><Phone /> Solicitar orçamento</a></article>; })}
    </div>
    <div className="container service-note"><ArrowRight /><div><strong>Não encontrou o serviço?</strong><span>Chame no WhatsApp e explique o que você precisa.</span></div><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Falar com a PRIME</a></div>
  </main>;
}
