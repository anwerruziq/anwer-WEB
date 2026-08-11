import { useEffect, useRef } from 'react';
import './Projects.css';
import './Projects.css';

const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('.pixel-card-wrapper');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('active');
                            }, index * 200);
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

    const projects = [
        {
            name: 'منصة دردشة هدرة',
            description: 'web application يتيح للمستخدمين ارسال واستقبال الرسائل والوسائط عن طرق غرف دردشة خاصة بالموقع',
            tech: ['React', 'CSS3', 'Node.js'],
            demo: 'https://hadrah.onrender.com/',
            github: 'https://github.com/anwerruziq/-.git',
            image: '/ChatGPT_Image_Jan_30__2026__09_05_25_PM-removebg-preview.png'
        },
        {
            name: 'موقع اكاتسكي',
            description: 'موقع اكاتسكي لمتابعة جديد حلقات الانمي والافلام',
            tech: ['React', 'Chart.js', 'API'],
            demo: 'https://ar-coder-anime.web.app/',
            github: 'https://github.com/anwerruziq/AR.CAcoder-game.git',
            image: '/Akatsuki_cloud-removebg-preview.png'
        },
        {
            name: 'شطائر وفطائر',
            description: 'موقع وجبات سريعة بتصميم احترافي',
            tech: ['React', 'CSS3', 'Node.js'],
            demo: 'https://sandwiches-and-pokp.vercel.app/',
            github: 'https://github.com/anwerruziq/sandwiches-and-.git',
            image: '/ChatGPT_Image_Feb_1__2026__02_47_22_PM-removebg-preview.png'
        },
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">
                    أبرز <span className="highlight">مشاريعي</span>
                </h2>
                <div ref={sectionRef} className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="pixel-card-wrapper reveal">
                            <div className="pixel-card">
                                <div className="pixel-card-header">STAGE 0{index + 1}</div>
                                
                                <div className="pixel-card-image-container">
                                    {project.image && (
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="pixel-card-image"
                                        />
                                    )}
                                </div>

                                <div className="pixel-card-content">
                                    <h3 className="pixel-card-title">{project.name}</h3>
                                    <p className="pixel-card-desc">{project.description}</p>
                                    
                                    <div className="pixel-tags">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="pixel-tag">[{t}]</span>
                                        ))}
                                    </div>

                                    <div className="pixel-buttons">
                                        <a href={project.github} className="pixel-btn" target="_blank" rel="noopener noreferrer">
                                            <i className='bx bxl-github btn-icon'></i> SOURCE
                                        </a>
                                        <a href={project.demo} className="pixel-btn primary" target="_blank" rel="noopener noreferrer">
                                            <i className='bx bx-play-circle btn-icon'></i> PLAY
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
