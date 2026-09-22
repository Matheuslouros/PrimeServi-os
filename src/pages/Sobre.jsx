import React from "react";
import { ShieldCheck, Zap, Wrench, Cpu } from "lucide-react";

export default function Sobre() {
  return <main className="page-shell section-light">
    <div className="container page-hero"><span className="section-kicker">Sobre a PRIME</span><h1>Elétrica e tecnologia em um só lugar.</h1><p>A PRIME SERVIÇOS nasce com uma proposta simples: oferecer soluções técnicas para instalações elétricas, manutenção e computadores, com atendimento próximo e execução organizada.</p></div>
    <div className="container about-grid">
      <article><Zap /><h2>Energia</h2><p>Serviços elétricos para necessidades residenciais, comerciais e industriais.</p></article>
      <article><Cpu /><h2>Tecnologia</h2><p>Montagem, organização e manutenção de computadores e setups.</p></article>
      <article><Wrench /><h2>Manutenção</h2><p>Diagnóstico e correções buscando segurança e funcionamento adequado.</p></article>
      <article><ShieldCheck /><h2>Organização</h2><p>Comunicação clara e atenção aos detalhes durante o serviço.</p></article>
    </div>
  </main>;
}
