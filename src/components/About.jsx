import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.fromTo('.about-title-glitch',
        { opacity: 0, x: -20 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );

      
      gsap.fromTo('.about-line',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: '.about-bio', start: 'top 80%' }
        }
      );

      
      gsap.fromTo('.about-stat-block',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: '.about-stats-grid', start: 'top 85%' }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        {}
        <div className="hud-label">
          <i className="bx bx-user-circle hud-label-icon"></i>
          <span className="hud-label-text">PLAYER PROFILE</span>
          <div className="hud-label-line" />
        </div>

        <div className="about-content">
          {}
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

          {}
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
