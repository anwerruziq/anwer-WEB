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

    tl.fromTo('.hero-diagonal-band',
      { opacity: 0, scaleX: 0 },
      { opacity: 1, scaleX: 1, duration: 1.4, ease: 'power3.inOut' },
      0.1
    );

    tl.fromTo('.hero-grid-overlay',
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      0.2
    );

    tl.fromTo('.hero-hud-corner',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(2)', stagger: 0.1 },
      0.3
    );

    tl.fromTo('.hero-huge-text',
      { opacity: 0, x: 120, skewX: -10 },
      { opacity: 1, x: 0, skewX: 0, duration: 1.2, ease: 'power3.out' },
      0.6
    );

    tl.fromTo('.landing-character',
      { y: 150, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.4, ease: 'power3.out' },
      0.3
    );

    tl.fromTo('.hero-glass-box',
      { opacity: 0, x: -60 },
      { opacity: 1, x: 0, duration: 1, ease: 'back.out(1.2)' },
      0.8
    );

    tl.fromTo('.hero-badge',
      { opacity: 0, x: -30, scaleX: 0.5 },
      { opacity: 1, x: 0, scaleX: 1, duration: 0.7, ease: 'power3.out' },
      0.5
    );

    tl.fromTo('.hero-glitch-line',
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, ease: 'power3.inOut' },
      1.0
    );

    tl.fromTo('.hero-cta',
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      1.1
    );

    tl.fromTo('.hero-status-bar',
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' },
      0.8
    );

    tl.fromTo('.hero-bottom-left',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      1.2
    );

    tl.fromTo('.hero-bottom-right',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      1.3
    );

    return () => { tl.kill(); };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-landing" ref={landingRef}>
        {/* Background layers */}
        <div className="hero-diagonal-band" />
        <div className="hero-grid-overlay" />
        <div className="hero-scanline" />
        <div className="hero-vignette" />

        {/* HUD Corners */}
        <div className="hero-hud-corner hero-hud-tl" />
        <div className="hero-hud-corner hero-hud-tr" />
        <div className="hero-hud-corner hero-hud-bl" />
        <div className="hero-hud-corner hero-hud-br" />

        {/* Large background text */}
        <h1 className="hero-huge-text" data-text="RUZIQ">RUZIQ</h1>

        {/* Character */}
        <div className="landing-character-wrap">
          <img
            src="/3cc3af48-06fd-485c-84aa-d9aec1ab0294_removalai_preview.png"
            alt="AR.CODER"
            className="landing-character"
            draggable={false}
          />
          <div className="character-glow" />
        </div>

        {/* Glass box with subtitle - Left side */}
        <div className="hero-glass-box">
          <div className="hero-badge">
            <span className="hero-badge-icon">◈</span>
            <span>FRONT-END DEVELOPER</span>
            <span className="hero-badge-level">LVL 3</span>
          </div>
          <p className="hero-subtitle">
            أبني تجارب ويب لا تُنسى.<br />بين الكود والتصميم والحركة.
          </p>
        </div>

        {/* Right side - Title block and CTA */}
        <div className="hero-text-right">
          <div className="hero-glitch-line" />
          <button className="hero-cta" onClick={scrollToAbout}>
            <span className="hero-cta-icon">▸</span>
            START MISSION
            <span className="hero-cta-icon">◂</span>
          </button>
        </div>

        {/* Status bar - Top Right */}
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

        {/* Bottom Left - Social links */}
        <div className="hero-bottom-left">
          <div className="social-links-hero">
            <a href="https://github.com/anwerruziq" target="_blank" rel="noreferrer"><i className="bx bxl-github"></i></a>
            <a href="#" target="_blank" rel="noreferrer"><i className="bx bxl-linkedin"></i></a>
            <a href="#" target="_blank" rel="noreferrer"><i className="bx bxl-twitter"></i></a>
          </div>
        </div>

        {/* Bottom Right - Next */}
        <div className="hero-bottom-right">
          <span className="next-text" onClick={scrollToAbout}>Next <i className="bx bx-chevron-right"></i></span>
        </div>

      </div>
    </section>
  );
};

export default Hero;
