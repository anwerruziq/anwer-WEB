import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-terminal',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo('.comm-link',
        { x: 20, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: '.terminal-links', start: 'top 85%' }
        }
      );
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
