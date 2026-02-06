import { useEffect, useRef } from 'react';
import './Journey.css';

const Journey = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const items = entry.target.querySelectorAll('.journey-item');
                        items.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('active');
                            }, index * 200);
                        });
                    }
                });
            },
            { threshold: 0.2 }
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

    const journeySteps = [
        {
            year: '2023',
            title: 'بداية الرحلة',
            description: 'بدأت تعلم أساسيات تطوير الويب والبرمجة بشغف كبير لاكتشاف هذا العالم.'
        },
        {
            year: '2024',
            title: 'إتقان React.js',
            description: 'ركزت على تطوير تطبيقات معقدة باستخدام React وفهم دورة حياة المكونات.'
        },
        {
            year: '2024',
            title: 'تطوير تطبيقات الجوال',
            description: 'دخلت عالم تطبيقات الجوال باستخدام Flutter لبناء تطبيقات متجاوبة وجميلة.'
        },
        {
            year: '2025',
            title: 'التطوير المستمر',
            description: 'أواصل تعلم أحدث التقنيات وأدوات الواجهات الأمامية لتقديم أفضل الحلول البرمجية.'
        }
    ];

    return (
        <section id="journey" className="journey">
            <div className="container">
                <h2 className="section-title">
                    مسيرتي <span className="highlight">المهنية</span>
                </h2>
                <div ref={sectionRef} className="journey-timeline">
                    {journeySteps.map((step, index) => (
                        <div key={index} className="journey-item reveal">
                            <div className="journey-marker">
                                <div className="journey-dot"></div>
                                <div className="journey-line"></div>
                            </div>
                            <div className="journey-content glass">
                                <span className="journey-year">{step.year}</span>
                                <h3 className="journey-title">{step.title}</h3>
                                <p className="journey-description">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;
