import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Journey.css';

gsap.registerPlugin(ScrollTrigger);

const TOGGLE = 'play reverse play reverse';

const Journey = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Section title glitch in
            const titleTl = gsap.timeline({
                scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', end: 'top 25%', toggleActions: TOGGLE }
            });
            titleTl.fromTo('.journey .section-title',
                { opacity: 0, y: -30, skewX: -10 },
                { opacity: 1, y: 0, skewX: 0, duration: 0.7, ease: 'power4.out' }
            );
            titleTl.fromTo('.journey .section-title',
                { filter: 'brightness(3) hue-rotate(90deg)' },
                { filter: 'brightness(1) hue-rotate(0deg)', duration: 0.3 },
                '-=0.3'
            );

            // Timeline items — unlock like game achievements
            gsap.utils.toArray('.journey-item').forEach((item, i) => {
                const itemTl = gsap.timeline({
                    scrollTrigger: { trigger: item, start: 'top 85%', end: 'top 35%', toggleActions: TOGGLE }
                });

                // Dot pulses in
                const dot = item.querySelector('.journey-dot');
                if (dot) {
                    itemTl.fromTo(dot,
                        { scale: 0, opacity: 0 },
                        { scale: 1.3, opacity: 1, duration: 0.3, ease: 'back.out(3)' }
                    );
                    itemTl.to(dot,
                        { scale: 1, duration: 0.2, ease: 'power2.out' }
                    );
                }

                // Line grows down
                const line = item.querySelector('.journey-line');
                if (line) {
                    itemTl.fromTo(line,
                        { scaleY: 0, transformOrigin: 'top' },
                        { scaleY: 1, duration: 0.5, ease: 'power2.out' },
                        '-=0.2'
                    );
                }

                // Content card materializes
                const content = item.querySelector('.journey-content');
                if (content) {
                    itemTl.fromTo(content,
                        { opacity: 0, x: i % 2 === 0 ? -50 : 50, scale: 0.9 },
                        { opacity: 1, x: 0, scale: 1, duration: 0.7, ease: 'power3.out' },
                        '-=0.3'
                    );
                    itemTl.fromTo(content,
                        { boxShadow: '0 0 25px rgba(120,162,181,0.3)' },
                        { boxShadow: '0 0 0px rgba(120,162,181,0)', duration: 0.6, ease: 'power2.out' },
                        '-=0.3'
                    );
                }

                // Year badge pops
                const year = item.querySelector('.journey-year');
                if (year) {
                    itemTl.fromTo(year,
                        { scale: 0, rotation: -15 },
                        { scale: 1, rotation: 0, duration: 0.4, ease: 'back.out(2.5)' },
                        '-=0.4'
                    );
                }
            });

        }, sectionRef);

        return () => ctx.revert();
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
        <section id="journey" className="journey" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">
                    مسيرتي <span className="highlight">المهنية</span>
                </h2>
                <div className="journey-timeline">
                    {journeySteps.map((step, index) => (
                        <div key={index} className="journey-item">
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
