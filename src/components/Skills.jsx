import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const TOGGLE = 'play none none reverse';


const skillsData = [
  { name: 'React.js', target: 95.0 },
  { name: 'JavaScript', target: 90.0 },
  { name: 'UI / CSS', target: 92.5 },
  { name: 'GSAP', target: 85.0 },
  { name: 'Figma', target: 80.0 },
];

const process = [
  { num: 'STAGE 1', title: 'DISCOVER', desc: 'فهم الهدف وتحليل المتطلبات لبناء استراتيجية اللعب' },
  { num: 'STAGE 2', title: 'DEFINE', desc: 'تحديد نطاق العمل والمعمارية التقنية للمشروع' },
  { num: 'STAGE 3', title: 'DESIGN', desc: 'تصميم الواجهة وتجربة المستخدم بشكل احترافي' },
  { num: 'STAGE 4', title: 'BUILD', desc: 'كتابة الأكواد وتطوير الميزات بأعلى أداء' },
  { num: 'STAGE 5', title: 'DELIVER', desc: 'الاختبار النهائي والإطلاق بنجاح' },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const polygonRef = useRef(null);
  const numbersRef = useRef([]);

  const SVG_SIZE = 400;
  const CENTER = SVG_SIZE / 2;
  const RADIUS = 140;

  
  const getPoint = (index, total, radius) => {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    return {
      x: CENTER + radius * Math.cos(angle),
      y: CENTER + radius * Math.sin(angle)
    };
  };

  
  const gridPolygons = [0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => {
    const points = Array.from({ length: 5 }).map((_, j) => {
      const p = getPoint(j, 5, RADIUS * scale);
      return `${p.x},${p.y}`;
    }).join(' ');
    return <polygon key={i} points={points} className="radar-grid" />;
  });

  
  const axisLines = Array.from({ length: 5 }).map((_, i) => {
    const p = getPoint(i, 5, RADIUS);
    return <line key={i} x1={CENTER} y1={CENTER} x2={p.x} y2={p.y} className="radar-axis" />;
  });

  
  const labelPositions = Array.from({ length: 5 }).map((_, i) => {
    
    const p = getPoint(i, 5, RADIUS + 40);
    
    if (i === 0) p.y -= 10; 
    if (i === 1) { p.x += 15; p.y -= 5; } 
    if (i === 2) { p.x += 10; p.y += 15; } 
    if (i === 3) { p.x -= 10; p.y += 15; } 
    if (i === 4) { p.x -= 15; p.y -= 5; } 
    return p;
  });

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

      // Radar container — boot up flash
      gsap.fromTo('.radar-container',
        { opacity: 0, scale: 0.8, filter: 'brightness(3) hue-rotate(90deg)' },
        {
          opacity: 1, scale: 1, filter: 'brightness(1) hue-rotate(0deg)',
          duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.radar-container', start: 'top 85%', end: 'bottom 10%', toggleActions: TOGGLE }
        }
      );
      
      const zeroPoints = Array.from({ length: 5 }).map(() => `${CENTER},${CENTER}`).join(' ');
      if (polygonRef.current) polygonRef.current.setAttribute('points', zeroPoints);

      const skillValues = { s0: 0, s1: 0, s2: 0, s3: 0, s4: 0 };

      // Radar chart powers up
      gsap.to(skillValues, {
        s0: skillsData[0].target,
        s1: skillsData[1].target,
        s2: skillsData[2].target,
        s3: skillsData[3].target,
        s4: skillsData[4].target,
        duration: 2.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.radar-container',
          start: 'top 75%',
          toggleActions: TOGGLE,
          end: 'bottom 10%',
        },
        onUpdate: () => {
          const currentValues = [skillValues.s0, skillValues.s1, skillValues.s2, skillValues.s3, skillValues.s4];
          
          currentValues.forEach((val, i) => {
            if (numbersRef.current[i]) {
              numbersRef.current[i].textContent = val.toFixed(1);
            }
          });

          const newPoints = currentValues.map((val, i) => {
            const r = (val / 100) * RADIUS;
            const p = getPoint(i, 5, r);
            return `${p.x},${p.y}`;
          }).join(' ');
          
          if (polygonRef.current) {
            polygonRef.current.setAttribute('points', newPoints);
          }
        }
      });

      // Quest cards — spawn like game items with power-up effect
      gsap.utils.toArray('.quest-card').forEach((card, i) => {
        const cardTl = gsap.timeline({
          scrollTrigger: { trigger: card, start: 'top 90%', end: 'bottom 10%', toggleActions: TOGGLE }
        });

        cardTl.fromTo(card,
          { y: 40, opacity: 0, scale: 0.8, rotation: i % 2 === 0 ? -3 : 3 },
          { y: 0, opacity: 1, scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(2)' }
        );

        cardTl.fromTo(card,
          { boxShadow: '0 0 30px rgba(120,162,181,0.4)' },
          { boxShadow: '0 0 0px rgba(120,162,181,0)', duration: 0.5, ease: 'power2.out' },
          '-=0.3'
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        
        <div className="hud-label">
          <i className="bx bx-radar hud-label-icon"></i>
          <span className="hud-label-text">PLAYER STATS & ATTRIBUTES</span>
          <div className="hud-label-line" />
        </div>

        <div className="radar-container hud-border">
          <svg className="radar-svg" viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}>
            <g className="radar-grid-group">
              {gridPolygons}
              {axisLines}
            </g>
            
            {}
            <polygon 
              ref={polygonRef} 
              className="radar-skill-polygon" 
              points=""
            />
          </svg>

          {}
          <div className="radar-labels-overlay">
            {skillsData.map((skill, i) => (
              <div 
                key={i} 
                className={`radar-label radar-label-${i}`}
                style={{
                  left: `${(labelPositions[i].x / SVG_SIZE) * 100}%`,
                  top: `${(labelPositions[i].y / SVG_SIZE) * 100}%`,
                }}
              >
                <div className="radar-skill-name">{skill.name}</div>
                <div className="radar-skill-number" ref={el => numbersRef.current[i] = el}>
                  0.0
                </div>
              </div>
            ))}
          </div>
        </div>

        {}
        <div className="hud-label" style={{ marginTop: '80px' }}>
          <i className="bx bx-map-alt hud-label-icon"></i>
          <span className="hud-label-text">MAIN QUESTLINE</span>
          <div className="hud-label-line" />
        </div>

        <div className="quest-grid">
          {process.map((step, i) => (
            <div key={i} className="quest-card hud-border">
              <div className="quest-header">
                <span className="quest-num">{step.num}</span>
                <span className="quest-status">PENDING</span>
              </div>
              <h3 className="quest-title">{step.title}</h3>
              <p className="quest-desc">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
