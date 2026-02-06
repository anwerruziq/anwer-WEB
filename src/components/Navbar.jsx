import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#home" className="nav-logo" onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}>
          <img src="/1770382658096-removebg-preview.png" alt="Anwer Logo" className="logo-img" />
        </a>

        <ul className="nav-links desktop-nav">
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>من أنا</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>مهاراتي</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>مشاريعي</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>تواصل معي</a></li>
        </ul>

        <button
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Overlay for blur effect */}
      <div
        className={`nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-logo">
          <img src="/1770382658096-removebg-preview.png" alt="Anwer Logo" className="logo-img" />
        </div>
        <ul className="mobile-nav-links">
          <li><a href="#about" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); scrollToSection('about'); }}>من أنا</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); scrollToSection('skills'); }}>مهاراتي</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); scrollToSection('projects'); }}>مشاريعي</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); scrollToSection('contact'); }}>تواصل معي</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
