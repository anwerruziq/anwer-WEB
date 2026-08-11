import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const CHARACTER_IMAGE = '/anwer-character.png';

const PixelBlock = ({ delay, scrollY, col, row, gridSize, randomX, randomY }) => {
    const startScroll = 20 + (delay * 250); 
    const endScroll = startScroll + 400; 
    const scrollProgress = useTransform(scrollY, [startScroll, endScroll], [0, 1]);
    
    const scrollX = useTransform(scrollProgress, [0, 1], [0, randomX]);
    const scrollY_pos = useTransform(scrollProgress, [0, 1], [0, randomY]);
    const scrollOpacity = useTransform(scrollProgress, [0, 0.7, 1], [1, 1, 0]);
    const scrollRotate = useTransform(scrollProgress, [0, 1], [0, randomX * 0.3]);

    const top = (row / gridSize) * 100;
    const bottom = Math.max(0, 100 - ((row + 1.05) / gridSize) * 100);
    const left = (col / gridSize) * 100;
    const right = Math.max(0, 100 - ((col + 1.05) / gridSize) * 100);
    
    const clipPath = `inset(${top}% ${right}% ${bottom}% ${left}%)`;

    return (
        <motion.div
            style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                x: scrollX,
                y: scrollY_pos,
                opacity: scrollOpacity,
                rotate: scrollRotate
            }}
        >
            <motion.div
                initial={{ 
                    opacity: 0, 
                    x: randomX, 
                    y: randomY, 
                    rotate: randomX * 0.3,
                    scale: 0.5
                }}
                animate={{ 
                    opacity: 1, 
                    x: 0, 
                    y: 0, 
                    rotate: 0,
                    scale: 1
                }}
                transition={{ 
                    duration: 2.2,
                    delay: delay,
                    ease: [0.25, 0.46, 0.45, 0.94]
                }}
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${CHARACTER_IMAGE})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    clipPath: clipPath,
                    WebkitClipPath: clipPath
                }}
            />
        </motion.div>
    );
};

const PixelCharacter = () => {
    const gridSize = 28;
    const blocksCount = gridSize * gridSize;
    const [blocks, setBlocks] = useState([]);
    const { scrollY } = useScroll();

    useEffect(() => {
        const generatedBlocks = Array.from({ length: blocksCount }).map((_, index) => {
            const randomX = (Math.random() - 0.5) * 1800;
            const randomY = (Math.random() - 0.5) * 1800;
            const delay = Math.random() * 2.5;
            const col = index % gridSize;
            const row = Math.floor(index / gridSize);
            
            return { index, delay, randomX, randomY, col, row };
        });
        setBlocks(generatedBlocks);
    }, [blocksCount]);

    return (
        <div className="hero-character-wrapper" style={{ position: 'relative', display: 'inline-block' }}>
            <img 
                src={CHARACTER_IMAGE}
                alt="Anwer Ruziq" 
                className="hero-character" 
                style={{ visibility: 'hidden' }}
            />
            {blocks.length > 0 && (
                <div 
                    style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        zIndex: 10,
                        pointerEvents: 'none',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)',
                        maskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)'
                    }}
                >
                    {blocks.map((b) => (
                        <PixelBlock 
                            key={b.index} 
                            delay={b.delay} 
                            col={b.col}
                            row={b.row}
                            gridSize={gridSize}
                            randomX={b.randomX}
                            randomY={b.randomY}
                            scrollY={scrollY} 
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const SubtitleTypewriter = ({ strings }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setHasStarted(true), 5800);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!hasStarted) return;

        const i = loopNum % strings.length;
        const fullText = strings[i];

        let timer;
        const handleTyping = () => {
            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
            setTypingSpeed(isDeleting ? 50 : 100);

            if (!isDeleting && text === fullText) {
                timer = setTimeout(() => setIsDeleting(true), 5000);
                return; 
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(500);
                return;
            }

            timer = setTimeout(handleTyping, typingSpeed);
        };

        timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, hasStarted, loopNum, strings, typingSpeed]);

    return (
        <h2 className="hero-title" style={{ minHeight: '1.5em', display: 'flex', alignItems: 'center' }}>
            <span>{text}</span>
            <span style={{ 
                display: 'inline-block',
                width: '0px',
                height: '1em',
                borderRight: '0.15em solid var(--accent-secondary)', 
                animation: 'blink-caret 0.75s step-end infinite',
                marginLeft: '4px'
            }}></span>
        </h2>
    );
};

const Hero = () => {
    const subtitleStrings = [
        "Front-end Developer",
        "React Developer",
        "UI/UX Enthusiast",
        "Web Designer"
    ];

    return (
        <section id="home" className="hero">
            <div className="hero-gradient"></div>

            <div className="hero-overlay">
                <div className="hero-content">
                    {/* Image on the LEFT */}
                    <div className="hero-image fade-in">
                        <PixelCharacter />
                    </div>

                    {/* Text on the RIGHT */}
                    <div className="hero-text fade-in">
                        <h1 className="hero-name terminal-typing">
                            ANWER RUZIQ
                        </h1>
                        <SubtitleTypewriter strings={subtitleStrings} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
