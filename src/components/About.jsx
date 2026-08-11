import { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
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

    return (
        <section id="about" className="about">
            <div className="container">
                <div ref={sectionRef} className="about-content reveal">
                    <div className="rpg-dialog-box">
                        <div className="rpg-dialog-header">
                            <h2 className="rpg-title">PLAYER INFO</h2>
                            <div className="rpg-hp-bar">
                                <span>HP: </span>
                                <div className="hp-fill"></div>
                            </div>
                        </div>
                        <div className="rpg-dialog-content">
                            <h2 className="section-title">
                                من <span className="highlight">أنا</span>
                            </h2>
                            <div className="about-text">
                                <p>
                                    أنا <strong>أنور</strong>، مطور واجهات مواقع شغوف ببناء تجارب رقمية استثنائية.
                                    أركز على تحويل الأفكار المعقدة إلى واجهات بسيطة، جميلة، وسهلة الاستخدام.
                                </p>
                                <p>
                                    تخصصي يكمن في تطوير واجهات الويب باستخدام <strong>React.js</strong> مع التركيز الشديد على
                                    <strong> تجربة المستخدم (UX)</strong> و<strong> نظافة الكود</strong>. أسعى دائماً لتحقيق أفضل
                                    أداء ممكن وتجاوب مثالي على كافة الأجهزة.
                                </p>
                                <p>
                                    أؤمن بأن البساطة هي قمة التعقيد، ولذلك أتبع نهجاً مدروساً في التصميم والتطوير يضمن
                                    الوصول إلى نتائج احترافية تلبي تطلعات المستخدمين.
                                </p>
                            </div>
                            <div className="rpg-dialog-arrow">▼</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
