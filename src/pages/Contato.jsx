import React from "react";
import { MessageCircle, Phone, MapPin, ArrowRight } from "lucide-react";
import { siteInfo } from "../mock";

export default function Contato() {
  const whatsapp = `https://wa.me/${siteInfo.phoneRaw}?text=${encodeURIComponent(siteInfo.whatsappMessage)}`;
  return <main className="page-shell section-light">
    <div className="container page-hero"><span className="section-kicker">Contato</span><h1>Vamos conversar sobre seu serviço.</h1><p>Envie uma mensagem pelo WhatsApp para solicitar orçamento ou explicar o que precisa.</p></div>
    <div className="container contact-grid">
      <article className="contact-card-main"><MessageCircle /><span>WhatsApp</span><h2>{siteInfo.phone}</h2><p>Mensagem automática: “{siteInfo.whatsappMessage}”</p><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Abrir WhatsApp <ArrowRight /></a></article>
      <div className="contact-details"><div><Phone /><strong>Telefone / WhatsApp</strong><span>{siteInfo.phone}</span></div><div><MapPin /><strong>Atendimento</strong><span>{siteInfo.location}</span></div></div>
    </div>
  </main>;
}
