import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const TOGGLE = 'play none none reverse';

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // HUD label sweeps in
      gsap.fromTo('.hud-label',
        { opacity: 0, x: -80, clipPath: 'inset(0 100% 0 0)' },
        {
          opacity: 1, x: 0, clipPath: 'inset(0 0% 0 0)',
          duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'bottom 20%', toggleActions: TOGGLE }
        }
      );

      // Terminal boots up — scanline flash effect
      const termTl = gsap.timeline({
        scrollTrigger: { trigger: '.contact-terminal', start: 'top 85%', end: 'bottom 10%', toggleActions: TOGGLE }
      });

      termTl.fromTo('.contact-terminal',
        { opacity: 0, scaleY: 0.01, transformOrigin: 'center' },
        { opacity: 1, scaleY: 1, duration: 0.4, ease: 'power4.out' }
      );

      termTl.fromTo('.contact-terminal',
        { filter: 'brightness(3) contrast(2)' },
        { filter: 'brightness(1) contrast(1)', duration: 0.3, ease: 'power2.out' },
        '-=0.1'
      );

      // Terminal text types in
      termTl.fromTo('.terminal-text',
        { opacity: 0, x: -15 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.2, ease: 'power2.out' },
        '-=0.1'
      );

      // Comm links spawn one by one like menu items
      gsap.utils.toArray('.comm-link').forEach((link, i) => {
        gsap.fromTo(link,
          { opacity: 0, x: 40, skewX: -5, clipPath: 'inset(0 100% 0 0)' },
          {
            opacity: 1, x: 0, skewX: 0, clipPath: 'inset(0 0% 0 0)',
            duration: 0.5,
            delay: i * 0.08,
            ease: 'power3.out',
            scrollTrigger: { trigger: '.terminal-links', start: 'top 90%', end: 'bottom 10%', toggleActions: TOGGLE }
          }
        );
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const contactLinks = [
    { label: 'EMAIL', value: 'anwer.ruziq@gmail.com', href: 'mailto:anwer.ruziq@gmail.com', icon: 'bx bx-envelope' },
    { label: 'PHONE', value: '+1234567890', href: 'tel:+1234567890', icon: 'bx bx-phone' },
    { label: 'WHATSAPP', value: 'Chat via WhatsApp', href: '#', icon: 'bx bxl-whatsapp' },
    { label: 'GITHUB', value: '@anwerruziq', href: 'https://github.com/anwerruziq', icon: 'bx bxl-github' },
    { label: 'INSTAGRAM', value: '@ar.coder', href: '#', icon: 'bx bxl-instagram' },
    { label: 'FACEBOOK', value: 'AR Coder', href: '#', icon: 'bx bxl-facebook' },
  ];

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        
        <div className="hud-label">
          <i className="bx bx-link-alt hud-label-icon"></i>
          <span className="hud-label-text">COMMUNICATIONS LINK</span>
          <div className="hud-label-line" />
        </div>

        <div className="contact-terminal hud-border">
          <div className="terminal-header">
            <span className="terminal-title">SYS.MSG.PROTOCOL</span>
            <span className="terminal-status">SECURE CONNECTION</span>
          </div>

          <div className="terminal-body">
            <p className="terminal-text">
              <span className="terminal-prompt">{'>'}</span> يتم فحص قنوات الاتصال المتاحة...
            </p>
            <p className="terminal-text dim">
              <span className="terminal-prompt">{'>'}</span> تم العثور على 6 قنوات للاتصال المباشر.
            </p>

            <div className="terminal-links">
              {contactLinks.map((link, idx) => (
                <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className="comm-link">
                  <div className="comm-label">
                    <i className={`${link.icon} comm-icon`}></i>
                    [{link.label}]
                  </div>
                  <div className="comm-value">{link.value}</div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
