import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

const TOGGLE = 'play none none reverse';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Footer slides up like a game credits screen
      gsap.fromTo(footerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: footerRef.current, start: 'top 95%', end: 'bottom 0%', toggleActions: TOGGLE }
        }
      );

      // Brand text glitch flash
      gsap.fromTo('.footer-brand-text',
        { opacity: 0, letterSpacing: '1em' },
        {
          opacity: 1, letterSpacing: '0.15em', duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: footerRef.current, start: 'top 95%', end: 'bottom 0%', toggleActions: TOGGLE }
        }
      );

      // Social links pop in
      gsap.fromTo('.social-link',
        { opacity: 0, y: 15 },
        {
          opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'back.out(2)',
          scrollTrigger: { trigger: footerRef.current, start: 'top 95%', end: 'bottom 0%', toggleActions: TOGGLE }
        }
      );

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer-section" ref={footerRef}>
      <div className="container">
        
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-brand-text">AR.CODER</span>
          </div>
          <div className="footer-socials">
            <a href="#" className="social-link">[ GITHUB ]</a>
            <a href="#" className="social-link">[ LINKEDIN ]</a>
            <a href="#" className="social-link">[ TWITTER ]</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} ANWER RUZIQ. ALL RIGHTS RESERVED.
          </div>
          <div className="footer-system-status">
            <span className="status-dot blink"></span>
            SYSTEM ONLINE
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
