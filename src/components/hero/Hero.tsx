'use client'
import Styles from '@/components/hero/Hero.module.scss';
import { forwardRef, RefObject, useEffect, useState } from 'react';

const typewritingText = ['React Experiences',
    'Scalable APIs',
    'Elegant Interfaces',
    'Full-Stack Solutions',
    'Clean Code'] as const;

interface SectionRefs {
    home: RefObject<HTMLDivElement | null>;
    about: RefObject<HTMLDivElement | null>;
    work: RefObject<HTMLDivElement | null>;
    skills: RefObject<HTMLDivElement | null>;
    contact: RefObject<HTMLDivElement | null>;
}

interface heroProps {
    sectionRefs: SectionRefs;
}
const Hero = forwardRef<HTMLDivElement, heroProps>((props, ref) => {
    const { sectionRefs } = props;
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentWord = typewritingText[currentWordIndex];

        if (charIndex < currentWord.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(currentWord.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 250);

            return () => clearTimeout(timeout);
        } else {
            // Wait before switching to next word
            const timeout = setTimeout(() => {
                setCharIndex(0);
                setDisplayedText("");
                setCurrentWordIndex((prev) => (prev + 1) % typewritingText.length);
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [charIndex, currentWordIndex]);

    const scrollTo = (section: keyof SectionRefs) => {
        sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className={Styles['hero-container']} ref={ref}>
            <div className={Styles.wrapper}>
                <span className={Styles.underScore}>Available for work</span>
                <h1>Hi. I'm <span>Sheik Aahin</span></h1>
                <h2>Front End Developer</h2>
                <p>2 years crafting <span>{displayedText}</span></p>
                <div className={Styles.specialization}>
                    <p>// Full-stack developer specializing in React & Node.js</p>
                    <p>// Turning complex problems into elegant, fast interfaces</p>
                    <p>// Currently open to full-time & freelance roles</p>
                </div>
                <div className={Styles["hero-buttons"]}>
                    <button type="button" onClick={()=>scrollTo('work')}>view my work</button>
                    <button type='button' onClick={()=>scrollTo('contact')}>get in touch</button>
                </div>
                <div className={Styles["small-overview"]}>
                    <div className={Styles.wrapper}>
                        <div>
                            <span>5+</span>
                            <span>Projects</span>
                        </div>
                        <div>
                            <span>2yr</span>
                            <span>Experience</span>
                        </div>
                        {/* <div>
                            <span>2</span>
                            <span>Students</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Hero