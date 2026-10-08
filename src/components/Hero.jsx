import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

const Hero = () => {
  const landingRef = useRef(null);

  useEffect(() => {
    const el = landingRef.current;
    if (!el) return;

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(el,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' },
      0
    );

    tl.fromTo('.hero-grid-overlay',
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      0.1
    );

    tl.fromTo('.hero-hud-corner',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(2)', stagger: 0.1 },
      0.3
    );

    tl.fromTo('.landing-character',
      { y: 120, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' },
      0.2
    );

    tl.fromTo('.hero-badge',
      { opacity: 0, x: -30, scaleX: 0.5 },
      { opacity: 1, x: 0, scaleX: 1, duration: 0.7, ease: 'power3.out' },
      0.5
    );

    tl.fromTo('.hero-subtitle',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      0.7
    );

    tl.fromTo('.hero-title',
      { opacity: 0, y: 50, skewY: 5 },
      { opacity: 1, y: 0, skewY: 0, duration: 1, ease: 'power3.out' },
      0.5
    );

    tl.fromTo('.hero-glitch-line',
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, ease: 'power3.inOut' },
      0.9
    );

    tl.fromTo('.hero-cta',
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      1.0
    );

    tl.fromTo('.hero-status-bar',
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' },
      0.8
    );

    return () => { tl.kill(); };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-landing" ref={landingRef}>
        {}
        <div className="hero-grid-overlay" />
        <div className="hero-scanline" />
        <div className="hero-vignette" />

        {}
        <div className="hero-hud-corner hero-hud-tl" />
        <div className="hero-hud-corner hero-hud-tr" />
        <div className="hero-hud-corner hero-hud-bl" />
        <div className="hero-hud-corner hero-hud-br" />

        {}
        <div className="landing-character-wrap">
          <img
            src="/anwer's/461d6702-5a6e-497f-8019-7039538f4e49_removalai_preview.png"
            alt="AR.CODER"
            className="landing-character"
            draggable={false}
          />
          <div className="character-glow" />
        </div>

        {}
        <div className="hero-text-left">
          <div className="hero-badge">
            <span className="hero-badge-icon">◈</span>
            <span>FRONT-END DEVELOPER</span>
            <span className="hero-badge-level">LVL 3</span>
          </div>
          <p className="hero-subtitle">
            أبني تجارب ويب لا تُنسى.<br />بين الكود والتصميم والحركة.
          </p>
        </div>

        {}
        <div className="hero-text-right">
          <h1 className="hero-title">
            <span className="hero-title-main" data-text="ANWER">ANWER</span>
            <br />
            <span className="hero-title-main" data-text="RUZIQ">RUZIQ</span>
          </h1>
          <div className="hero-glitch-line" />
          <button className="hero-cta" onClick={scrollToAbout}>
            <span className="hero-cta-icon">▸</span>
            START MISSION
            <span className="hero-cta-icon">◂</span>
          </button>
        </div>

        {}
        <div className="hero-status-bar">
          <div className="status-item">
            <span className="status-label">STATUS</span>
            <span className="status-value status-online">● ONLINE</span>
          </div>
          <div className="status-item">
            <span className="status-label">REGION</span>
            <span className="status-value">YE — SANA'A</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
