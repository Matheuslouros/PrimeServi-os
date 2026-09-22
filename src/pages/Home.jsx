import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Factory, Home as HomeIcon, Monitor, Phone, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { computerGallery, processSteps, services, siteInfo } from "../mock";

const iconFor = { home: HomeIcon, factory: Factory, monitor: Monitor };

const Home = () => {
  const whatsapp = `https://wa.me/${siteInfo.phoneRaw}?text=${encodeURIComponent(siteInfo.whatsappMessage)}`;

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <section className="hero prime-hero">
        <div className="hero-grid-lines" />
        <div className="hero-orb hero-orb-purple" />
        <div className="hero-orb hero-orb-blue" />
        <div className="container hero-content">
          <div className="hero-copy reveal">
            <span className="eyebrow"><span className="eyebrow-dot" /> Elétrica, tecnologia e manutenção</span>
            <h1>Energia, tecnologia e <span>soluções</span> para o seu projeto.</h1>
            <p>Serviços elétricos residenciais e industriais, além de montagem e manutenção de computadores. Um atendimento direto, organizado e pensado para cada necessidade.</p>
            <div className="hero-actions">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><Phone /> Pedir orçamento</a>
              <Link to="/servicos" className="btn btn-ghost">Ver serviços <ArrowRight /></Link>
            </div>
            <div className="hero-trust"><span><ShieldCheck /> Execução cuidadosa</span><span><Sparkles /> Organização</span><span><Zap /> Soluções práticas</span></div>
          </div>

          <div className="hero-visual reveal reveal-delay-1">
            <div className="tech-card">
              <div className="tech-card-glow" />
              <div className="tech-lines" />
              <div className="tech-icon"><Zap /></div>
              <span>PRIME</span>
              <strong>SERVIÇOS</strong>
              <small>ELÉTRICA • TECH • MANUTENÇÃO</small>
              <div className="tech-chip-row"><i /><i /><i /><i /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats-grid">
          <div className="reveal"><strong>Residencial</strong><span>instalações e reparos</span></div>
          <div className="reveal"><strong>Industrial</strong><span>infraestrutura e manutenção</span></div>
          <div className="reveal"><strong>Computadores</strong><span>montagem e upgrades</span></div>
          <div className="reveal"><strong>WhatsApp</strong><span>orçamento direto</span></div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading reveal"><span className="section-kicker">O que fazemos</span><h2>Serviços separados por necessidade.</h2><p>Escolha a área que você precisa e veja as principais soluções da PRIME SERVIÇOS.</p></div>
          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = iconFor[service.icon];
              return <article className="service-card reveal" style={{ "--delay": `${index * 90}ms` }} key={service.id}>
                <div className="service-icon"><Icon /></div>
                <span className="service-index">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>{service.bullets.map((bullet) => <li key={bullet}><CheckCircle2 />{bullet}</li>)}</ul>
                <Link to="/servicos" className="service-link">Saiba mais <ArrowRight /></Link>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container split-grid">
          <div className="section-copy reveal">
            <span className="section-kicker">PRIME SERVIÇOS</span>
            <h2>Do projeto elétrico ao setup do seu computador.</h2>
            <p>A proposta é reunir serviços técnicos diferentes em uma única marca, com comunicação simples e foco em organização, manutenção e acabamento.</p>
            <ul className="check-list"><li><CheckCircle2 /> Atendimento residencial e industrial</li><li><CheckCircle2 /> Montagem e manutenção de computadores</li><li><CheckCircle2 /> Organização de cabos e componentes</li><li><CheckCircle2 /> Orçamento pelo WhatsApp</li></ul>
            <Link to="/sobre-nos" className="btn btn-dark">Conheça a PRIME <ArrowRight /></Link>
          </div>
          <div className="feature-panel reveal reveal-delay-1"><div className="panel-grid" /><Zap className="panel-zap" /><span>ENERGIA</span><strong>+ TECNOLOGIA</strong><small>Uma solução para cada necessidade.</small></div>
        </div>
      </section>

      <section className="section section-gallery">
        <div className="container">
          <div className="section-heading reveal"><span className="section-kicker">Trabalhos</span><h2>Montagens e setups realizados.</h2><p>Alguns dos trabalhos de computadores enviados para o projeto.</p></div>
          <div className="gallery-grid">
            {computerGallery.map((image, index) => <figure className="gallery-item reveal" style={{ "--delay": `${index * 70}ms` }} key={image.src}><img src={image.src} alt={image.title} loading="lazy" /><figcaption><span>{image.category}</span><strong>{image.title}</strong></figcaption></figure>)}
          </div>
          <div className="center-action reveal"><Link to="/servicos" className="btn btn-dark">Ver todos os serviços <ArrowRight /></Link></div>
        </div>
      </section>

      <section className="section section-dark process-section">
        <div className="container">
          <div className="section-heading reveal"><span className="section-kicker">Como funciona</span><h2>Simples do primeiro contato à entrega.</h2></div>
          <div className="steps-grid">{processSteps.map((step) => <div className="step-card reveal" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></div>)}</div>
        </div>
      </section>

      <section className="cta-section reveal"><div className="container cta-inner"><div><span className="section-kicker light">Vamos começar?</span><h2>Precisa de um serviço elétrico ou técnico?</h2><p>Envie uma mensagem e conte o que você precisa. A PRIME SERVIÇOS orienta você pelo WhatsApp.</p></div><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large"><Phone /> {siteInfo.phone}</a></div></section>
    </div>
  );
};
export default Home;
