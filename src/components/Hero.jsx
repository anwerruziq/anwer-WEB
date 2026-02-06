import { useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            {/* Background gradient overlay if needed */}
            <div className="hero-gradient"></div>

            {/* Spline 3D Model - Main relative content like the reference */}
            <div className={`spline-container ${isLoaded ? 'loaded' : ''}`}>
                <iframe
                    src="https://my.spline.design/blackabstractart-8qrAEUIticOzwS9JbOdzJpuA/"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    onLoad={() => setIsLoaded(true)}
                    title="3D Interactive Model"
                    allow="autoplay; fullscreen; xr-spatial-tracking; amp; gyroscope; accelerometer"
                ></iframe>
            </div>

            {!isLoaded && (
                <div className="hero-loader">
                    <div className="loader-ring"></div>
                </div>
            )}

            {/* Floating text overlay - Absolute like the reference */}
            <div className="hero-overlay" style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 1s ease' }}>
                <div className="hero-content">
                    <div className="hero-text fade-in">
                        <h1 className="hero-name">
                            ANWER<span className="dot">.</span>
                        </h1>
                        <h2 className="hero-title">  Front-end Developoe</h2>
                        <p className="hero-tagline">
                            أقوم ببناء واجهات ويب حديثة، سريعة، ومتجاوبة بأحدث التقنيات.
                        </p>
                        <div className="hero-buttons">
                            <button
                                className="btn-glow-inverse"
                                onClick={() => scrollToSection('projects')}
                            >
                                عرض المشاريع
                            </button>
                            <button
                                className="btn-glow"
                                onClick={() => scrollToSection('contact')}
                            >
                                تواصل معي
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
