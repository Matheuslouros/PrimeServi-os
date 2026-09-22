import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X, Zap, MessageCircle, Phone, ChevronUp } from "lucide-react";
import { siteInfo, navLinks } from "../mock";

const Layout = () => {
  const location = useLocation();
  const [menuAberto, setMenuAberto] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const whatsapp = `https://wa.me/${siteInfo.phoneRaw}?text=${encodeURIComponent(siteInfo.whatsappMessage)}`;

  useEffect(() => {
    setMenuAberto(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site-shell">
      <div className="scroll-progress" />
      <header className="site-header">
        <div className="container header-main">
          <NavLink to="/" className="brand" aria-label="PRIME SERVIÇOS - Início">
            <img className="brand-logo" src="/logo-prime.jpg" alt="PRIME SERVIÇOS" />
          </NavLink>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="header-cta">
            <MessageCircle /> Orçamento
          </a>

          <button className="mobile-menu-button" onClick={() => setMenuAberto((v) => !v)} aria-label="Abrir menu" aria-expanded={menuAberto}>
            {menuAberto ? <X /> : <Menu />}
          </button>
        </div>

        {menuAberto && (
          <nav className="mobile-nav" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"} className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}>
                {link.label}
              </NavLink>
            ))}
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mobile-whatsapp">Falar pelo WhatsApp</a>
          </nav>
        )}
      </header>

      <main><Outlet /></main>

      <section className="footer-contact reveal">
        <div className="container footer-contact-grid">
          <div><MessageCircle /><strong>Atendimento direto</strong><span>Fale com a PRIME pelo WhatsApp</span></div>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer"><Phone /><strong>{siteInfo.phone}</strong><span>Solicite seu orçamento</span></a>
          <div><Zap /><strong>Elétrica + Tecnologia</strong><span>Residencial, industrial e computação</span></div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {siteInfo.brand}. Todos os direitos reservados.</span>
          <span>Elétrica • Manutenção • Computadores</span>
          <span>Desenvolvido por Matheus Louros soluções de web</span>
        </div>
      </footer>

      <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Fale conosco pelo WhatsApp">
        <MessageCircle /> <span>WhatsApp</span>
      </a>

      {showTop && <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Voltar ao topo"><ChevronUp /></button>}
    </div>
  );
};

export default Layout;
