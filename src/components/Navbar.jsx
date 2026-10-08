import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 60;
      setIsScrolled(scrolled);

      const doc = document.documentElement;
      const pct = (window.scrollY / (doc.scrollHeight - doc.clientHeight)) * 100;
      setScrollPct(Math.round(Math.min(pct, 100)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {}
      <div className="nav-xp-bar">
        <div className="nav-xp-fill" style={{ width: `${scrollPct}%` }} />
        <span className="nav-xp-text">{scrollPct}%</span>
      </div>

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        {}
        <button className="nav-brand" onClick={() => scrollToSection('home')}>
          <i className="bx bx-joystick nav-brand-icon"></i>
          AR.CODER
        </button>

        {}
        <ul className="nav-links desktop-nav">
          {[
            { label: 'من أنا', id: 'about', tag: '01' },
            { label: 'مهاراتي', id: 'skills', tag: '02' },
            { label: 'مشاريعي', id: 'projects', tag: '03' },
            { label: 'تواصل', id: 'contact', tag: '04' },
          ].map(({ label, id, tag }) => (
            <li key={id}>
              <button
                className="nav-link-btn"
                onClick={() => scrollToSection(id)}
              >
                <span className="nav-link-tag">{tag}</span>
                {label}
              </button>
            </li>
          ))}
        </ul>

        {}
        <button
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {}
      <div
        className={`nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>
          <i className="bx bx-x"></i>
        </button>
        <ul className="mobile-nav-links">
          {[
            { label: 'من أنا', id: 'about', tag: '01' },
            { label: 'مهاراتي', id: 'skills', tag: '02' },
            { label: 'مشاريعي', id: 'projects', tag: '03' },
            { label: 'تواصل', id: 'contact', tag: '04' },
          ].map(({ label, id, tag }) => (
            <li key={id}>
              <button onClick={() => scrollToSection(id)}>
                <span className="mobile-link-tag">{tag}</span>
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
