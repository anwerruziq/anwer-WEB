import { useEffect, useRef } from 'react';
import { FaFigma } from 'react-icons/fa';
import './Skills.css';

const SkillCard = ({ name, icon: Icon, description }) => {
    // Generate 25 trackers for 3D effect
    const trackers = Array.from({ length: 25 }, (_, i) => i + 1);

    return (
        <div className="skill-container noselect">
            <div className="canvas">
                {trackers.map((num) => (
                    <div key={num} className={`tracker tr-${num}`}></div>
                ))}
                <div id="card">
                    <div className="card-content">
                        <div className="card-glare"></div>
                        <div className="cyber-lines">
                            <span></span><span></span><span></span><span></span>
                        </div>
                        <p id="prompt">{name.toUpperCase()}</p>
                        <div className="title">
                            <span className="skill-icon-large">{Icon}</span>
                        </div>
                        <div className="glowing-elements">
                            <div className="glow-1"></div>
                            <div className="glow-2"></div>
                            <div className="glow-3"></div>
                        </div>
                        <div className="subtitle">
                            <span>{description}</span>
                            <span className="highlight">MODERN TECH</span>
                        </div>
                        <div className="card-particles">
                            <span></span><span></span><span></span>
                            <span></span><span></span><span></span>
                        </div>
                        <div className="corner-elements">
                            <span></span><span></span><span></span><span></span>
                        </div>
                        <div className="scan-line"></div>
                    </div>
                </div>
            </div>
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
                        const cards = entry.target.querySelectorAll('.skill-container');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('reveal-active');
                            }, index * 150);
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
        {
            name: 'HTML / CSS',
            icon: '🎨',
            description: 'STRUCTURE & STYLE'
        },
        {
            name: 'JavaScript',
            icon: '⚡',
            description: 'LOGIC & ACTIONS'
        },
        {
            name: 'React.js',
            icon: '⚛️',
            description: 'SINGLE PAGE APPS'
        },
        {
            name: 'Figma',
            icon: <FaFigma />,
            description: 'UI/UX DESIGN'
        },
        {
            name: 'Responsiveness',
            icon: '📐',
            description: 'ALL DEVICES'
        },
        {
            name: 'Git & GitHub',
            icon: '🔧',
            description: 'COLLABORATION'
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">
                    مهاراتي <span className="highlight-text">التقنية</span>
                </h2>
                <div ref={sectionRef} className="skills-grid">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            name={skill.name}
                            icon={skill.icon}
                            description={skill.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
