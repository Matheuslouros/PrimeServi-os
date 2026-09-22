import React from "react";
import { Factory, Home as HomeIcon, Monitor, CheckCircle2, ArrowRight, Phone, ShieldCheck, Wrench, Sparkles } from "lucide-react";
import { services, siteInfo, galleries } from "../mock";
const icons={home:HomeIcon,factory:Factory,monitor:Monitor};
export default function Servicos(){
 const whatsapp=`https://wa.me/${siteInfo.phoneRaw}?text=${encodeURIComponent(siteInfo.whatsappMessage)}`;
 return <main className="page-shell section-light">
  <div className="container page-hero"><span className="section-kicker">PRIME SERVIÇOS</span><h1>Serviços elétricos e computação.</h1><p>Trabalhos residenciais, industriais e de computação, com fotos reais de serviços realizados.</p></div>
  <div className="container service-page-grid">
   {services.map((service,index)=>{const Icon=icons[service.icon];return <article className={`big-service-card big-service-card-${service.id}`} key={service.id}><div className="big-service-top"><span className="service-icon"><Icon/></span><span>0{index+1}</span></div><h2>{service.title}</h2><p>{service.description}</p><ul>{service.bullets.map(b=><li key={b}><CheckCircle2/>{b}</li>)}</ul><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-dark"><Phone/> Solicitar orçamento</a></article>})}
  </div>
  {services.map(service=><section className={`work-showcase work-${service.id}`} key={service.id}><div className="container"><div className="section-heading"><span className="section-kicker">Trabalhos realizados</span><h2>{service.title}</h2><p>{service.description}</p></div><div className="work-gallery">{galleries[service.id].map((img,i)=><figure className="work-photo" key={img.src}><img src={img.src} alt={img.title} loading="lazy"/><figcaption>{img.title}</figcaption></figure>)}</div></div></section>)}
  <section id="sobre" className="about-combined"><div className="container"><div className="section-heading"><span className="section-kicker">Sobre a PRIME</span><h2>Segurança, qualidade e confiança em cada serviço.</h2><p>A PRIME SERVIÇOS reúne elétrica residencial, elétrica industrial e computação em um único atendimento, com foco em organização, cuidado e solução prática.</p></div><div className="about-grid"><article><ShieldCheck/><h2>Segurança</h2><p>Atenção na execução e nas condições de cada serviço.</p></article><article><Wrench/><h2>Serviço técnico</h2><p>Soluções para instalações, manutenção e equipamentos.</p></article><article><Sparkles/><h2>Organização</h2><p>Cuidado com acabamento, cabos e ambiente de trabalho.</p></article><article className="about-tech"><Monitor/><h2>Computação</h2><p>Montagem, manutenção, upgrades e configuração de PCs.</p></article></div></div></section>
  <div className="container service-note"><ArrowRight/><div><strong>Precisa de outro serviço?</strong><span>Chame no WhatsApp e explique o que você precisa.</span></div><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Falar com a PRIME</a></div>
 </main>;
}
