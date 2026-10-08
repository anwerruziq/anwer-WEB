import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const TOGGLE = 'play reverse play reverse';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo('.hud-label',
        { opacity: 0, x: -80, clipPath: 'inset(0 100% 0 0)' },
        {
          opacity: 1, x: 0, clipPath: 'inset(0 0% 0 0)',
          duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', end: 'top 25%', toggleActions: TOGGLE }
        }
      );

      const titleTl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 20%', toggleActions: TOGGLE }
      });
      titleTl
        .fromTo('.about-title-glitch',
          { opacity: 0, x: -40, skewX: -15 },
          { opacity: 1, x: 0, skewX: 0, duration: 0.6, ease: 'power4.out' }
        )
        .fromTo('.about-title-glitch',
          { filter: 'brightness(3) hue-rotate(90deg)' },
          { filter: 'brightness(1) hue-rotate(0deg)', duration: 0.4, ease: 'power2.out' },
          '-=0.3'
        );

      gsap.fromTo('.about-line',
        { y: 20, opacity: 0, clipPath: 'inset(0 100% 0 0)' },
        {
          y: 0, opacity: 1, clipPath: 'inset(0 0% 0 0)',
          duration: 0.7, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: '.about-bio', start: 'top 80%', end: 'top 30%', toggleActions: TOGGLE }
        }
      );

      gsap.fromTo('.about-stat-block',
        { scale: 0.5, opacity: 0, y: 40, boxShadow: '0 0 0px rgba(120,162,181,0)' },
        {
          scale: 1, opacity: 1, y: 0,
          boxShadow: '0 0 20px rgba(120,162,181,0.15)',
          duration: 0.7, stagger: 0.15,
          ease: 'back.out(2)',
          scrollTrigger: { trigger: '.about-stats-grid', start: 'top 85%', end: 'top 35%', toggleActions: TOGGLE }
        }
      );

      gsap.utils.toArray('.stat-value').forEach((el) => {
        const text = el.textContent;
        const isPercent = text.includes('%');
        const num = parseInt(text.replace(/[^0-9]/g, ''));
        const prefix = text.startsWith('+') ? '+' : '';
        const suffix = isPercent ? '%' : '';

        gsap.fromTo(el, { textContent: prefix + '0' + suffix }, {
          textContent: num,
          duration: 1.5,
          ease: 'power1.out',
          snap: { textContent: 1 },
          scrollTrigger: { trigger: el, start: 'top 90%', end: 'top 40%', toggleActions: TOGGLE },
          onUpdate: function() {
            el.textContent = prefix + Math.round(this.targets()[0].textContent) + suffix;
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="hud-label">
          <i className="bx bx-user-circle hud-label-icon"></i>
          <span className="hud-label-text">PLAYER PROFILE</span>
          <div className="hud-label-line" />
        </div>

        <div className="about-content">
          <div className="about-bio">
            <h2 className="about-title-glitch" data-text="نصمم تجارب تتجاوز الشاشة">
              نصمم تجارب تتجاوز الشاشة
            </h2>
            <div className="about-text-box hud-border">
              <p className="about-line">
                أنا <span className="neon-text-cyan">أنور رزيق</span>، مطور واجهات مواقع شغوف ببناء تجارب رقمية استثنائية. أحوّل الأفكار المعقدة إلى واجهات بسيطة، جميلة، وسهلة الاستخدام.
              </p>
              <p className="about-line">
                تخصصي في <span className="neon-text-magenta">React.js</span> مع تركيز شديد على تجربة المستخدم وجماليات الحركة. أؤمن بأن البساطة هي قمة الإتقان.
              </p>
            </div>
          </div>

          <div className="about-stats-grid">
            <div className="about-stat-block hud-border">
              <div className="stat-icon"><i className="bx bx-bolt-circle"></i></div>
              <div className="stat-details">
                <span className="stat-value">+3</span>
                <span className="stat-label">YEARS XP</span>
              </div>
            </div>
            
            <div className="about-stat-block hud-border">
              <div className="stat-icon"><i className="bx bx-trophy"></i></div>
              <div className="stat-details">
                <span className="stat-value">+15</span>
                <span className="stat-label">QUESTS COMPLETED</span>
              </div>
            </div>
            
            <div className="about-stat-block hud-border">
              <div className="stat-icon"><i className="bx bx-shield-alt-2"></i></div>
              <div className="stat-details">
                <span className="stat-value">100%</span>
                <span className="stat-label">COMMITMENT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
