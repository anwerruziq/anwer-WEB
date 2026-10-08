import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 'Q-01',
    name: 'رشفة',
    nameEn: 'RASHFAA',
    type: 'MULTIPLAYER HUB',
    rank: 'S-RANK',
    desc: 'موقع رشفة مصمم ليكون تجربه رقميه لعشاق القهوة',
    tech: ['React', 'Node.js', 'Socket.io', 'GSAP', 'CSS3'],
    demo: 'https://rashfaa.vercel.app/',
    github: 'https://github.com/anwerruziq/-.git',
  },
  {
    id: 'Q-02',
    name: 'بناء للمقاولات',
    nameEn: 'BUNNA BUILDIMG',
    type: 'STREAMING ARCHIVE',
    rank: 'A-RANK',
    desc: 'موقع خاص لشركة انشائات بتصميم تفاعلي و متجاوب مع جميع الاجهزة',
    tech: ['React', 'REST API', 'GSAP', 'Chart.js'],
    demo: 'https://bunna.vercel.app/',
    github: 'https://github.com/anwerruziq/AR.CAcoder-game.git',
  },
  {
    id: 'Q-03',
    name: 'مدارات التنقيذ',
    nameEn: 'MDARAT ALTANFEETH',
    type: 'MERCHANT UI',
    rank: 'B-RANK',
    desc: 'موقع شركة مدارات التنفيذ لتقديم حلول متكاملة في مجال التصنيع و المقاولات والنقل ',
    tech: ['React', 'CSS3', 'Node.js'],
    demo: 'https://sandwiches-and-pokp.vercel.app/',
    github: 'https://github.com/anwerruziq/sandwiches-and-.git',
  },
  {
    id: 'Q-04',
    name: 'AR سينما',
    nameEn: 'AR CINMA',
    type: 'MULTIPLAYER HUB',
    rank: 'S-RANK',
    desc: 'موقع لمتابعة احدث الافلام والمسلسلات و الانمي بتصميم فريد ',
    tech: ['React', 'Node.js', 'API', 'Socket.io', 'CSS3'],
    demo: 'https://ar-coder.vercel.app/',
    github: 'https://github.com/anwerruziq/-.git',
  },
  {
    id: 'Q-05',
    name: 'منصة دردشة هدرة',
    nameEn: 'HADRAH CHAT',
    type: 'MULTIPLAYER HUB',
    rank: 'S-RANK',
    desc: 'منصة دردشة في الوقت الفعلي تتيح تبادل الرسائل والوسائط عبر غرف خاصة.',
    tech: ['React', 'Node.js', 'Socket.io', 'CSS3'],
    demo: 'https://hadrah.onrender.com/',
    github: 'https://github.com/anwerruziq/-.git',
  },

];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.mission-card').forEach((card, i) => {
        gsap.fromTo(card,
          { y: 50, opacity: 0, scale: 0.98 },
          {
            y: 0, opacity: 1, scale: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: { trigger: card, start: 'top 85%' },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="container">

        <div className="hud-label">
          <i className="bx bx-folder-open hud-label-icon"></i>
          <span className="hud-label-text">COMPLETED MISSIONS</span>
          <div className="hud-label-line" />
        </div>

        <div className="missions-list">
          {projects.map((p) => (
            <article key={p.id} className="mission-card hud-border">
              {}
              <div className="mission-header">
                <div className="mission-id">{p.id}</div>
                <div className="mission-type">{p.type}</div>
                <div className="mission-rank">{p.rank}</div>
              </div>

              {}
              <div className="mission-body">
                <div className="mission-info">
                  <h3 className="mission-title-ar">{p.name}</h3>
                  <span className="mission-title-en">{p.nameEn}</span>
                  <p className="mission-desc">{p.desc}</p>
                </div>

                <div className="mission-tech">
                  {p.tech.map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>

              {}
              <div className="mission-footer">
                <div className="mission-status">
                  <span className="status-dot"></span>
                  STATUS: CLEARED
                </div>
                <div className="mission-actions">
                  <a href={p.github} className="mission-btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    [ SOURCE ]
                  </a>
                  <a href={p.demo} className="mission-btn btn-primary" target="_blank" rel="noopener noreferrer">
                    [ INITIATE ]
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
