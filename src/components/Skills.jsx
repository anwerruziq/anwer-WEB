import { useEffect, useRef } from 'react';
import './Skills.css';
import './Skills.css';

const SkillStat = ({ name, icon: Icon, level, delay }) => {
    return (
        <div className="skill-stat-row reveal" style={{ transitionDelay: `${delay}ms` }}>
            <div className="skill-icon-box">
                {typeof Icon === 'string' ? <span>{Icon}</span> : Icon}
            </div>
            <div className="skill-info">
                <div className="skill-name">{name}</div>
                <div className="skill-bar-container">
                    <div className="skill-bar-fill" style={{ width: level }}></div>
                </div>
            </div>
            <div className="skill-level-text">{level}</div>
        </div>
    );
};

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const rows = entry.target.querySelectorAll('.skill-stat-row');
                        rows.forEach((row) => {
                            row.classList.add('active');
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const skills = [
        { name: 'HTML / CSS', icon: <i className='bx bxl-html5'></i>, level: '95%' },
        { name: 'JavaScript', icon: <i className='bx bxl-javascript'></i>, level: '90%' },
        { name: 'React.js', icon: <i className='bx bxl-react'></i>, level: '85%' },
        { name: 'Figma', icon: <i className='bx bxl-figma'></i>, level: '80%' },
        { name: 'Responsiveness', icon: <i className='bx bx-devices'></i>, level: '95%' },
        { name: 'Git & GitHub', icon: <i className='bx bxl-git'></i>, level: '85%' }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">
                    مهاراتي <span className="highlight-text">التقنية</span>
                </h2>
                
                <div ref={sectionRef} className="rpg-stats-board">
                    <div className="rpg-stats-header">
                        <h3>CHARACTER STATS</h3>
                        <span>LVL 99</span>
                    </div>
                    
                    <div className="skills-list">
                        {skills.map((skill, index) => (
                            <SkillStat
                                key={index}
                                name={skill.name}
                                icon={skill.icon}
                                level={skill.level}
                                delay={index * 150}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
