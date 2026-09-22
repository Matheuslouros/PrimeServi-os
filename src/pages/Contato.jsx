import React from "react";
import { MessageCircle, Phone, MapPin, ArrowRight, Mail } from "lucide-react";
import { siteInfo } from "../mock";
export default function Contato(){
 const whatsapp=`https://wa.me/${siteInfo.phoneRaw}?text=${encodeURIComponent(siteInfo.whatsappMessage)}`;
 return <main className="page-shell section-light"><div className="container page-hero"><span className="section-kicker">Contato</span><h1>Vamos conversar sobre seu serviço.</h1><p>Entre em contato pelo WhatsApp ou e-mail para solicitar orçamento.</p></div><div className="container contact-grid"><article className="contact-card-main"><MessageCircle/><span>WhatsApp</span><h2>{siteInfo.phone}</h2><p>Mensagem automática: “{siteInfo.whatsappMessage}”</p><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><img className="whatsapp-icon" src="/images/whatsapp-logo.webp" alt=""/> Abrir WhatsApp <ArrowRight/></a></article><div className="contact-details"><div><Phone/><strong>Telefone / WhatsApp</strong><span>{siteInfo.phone}</span></div><div><Mail/><strong>E-mail</strong><a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></div><div><MapPin/><strong>Atendimento</strong><span>{siteInfo.location}</span></div></div></div></main>;
}
