import { useEffect, useRef } from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import './Projects.css';


const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('.project-item-parent');
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
                        <div key={index} className="project-item-parent reveal">
                            <div className="project-3d-card">
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="project-watermark"
                                    />
                                )}
                                <div className="project-3d-logo">
                                    <span className="circle circle1"></span>
                                    <span className="circle circle2"></span>
                                    <span className="circle circle3"></span>
                                    <span className="circle circle4"></span>
                                    <span className="circle circle5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="svg">
                                            <path d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" fill="#ffffff"></path>
                                        </svg>
                                    </span>
                                </div>

                                <div className="project-3d-glass"></div>

                                <div className="project-3d-content">
                                    <span className="project-3d-title">{project.name}</span>
                                    <span className="project-3d-text">{project.description}</span>
                                    <div className="project-3d-tags">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="mini-tag">{t}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="project-3d-bottom">
                                    <div className="social-buttons-container">
                                        <a href={project.github} className="social-button" target="_blank" rel="noopener noreferrer">
                                            <FaGithub className="svg" />
                                        </a>
                                        <a href={project.demo} className="social-button" target="_blank" rel="noopener noreferrer">
                                            <FaGlobe className="svg" />
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
