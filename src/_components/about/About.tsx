'use client'
import Styles from '@/_components/about/About.module.scss';
import { forwardRef } from 'react';

const skills = ['React','TypeScript','Node.js','Next.js','MongoDB'] as const;

const About = forwardRef<HTMLDivElement>( (props, ref) => {
    return (
        <div className={Styles['about-container']} ref={ref}>
            <div className={Styles.wrapper}>
                <span className={Styles.underScore}>About me</span>
                <h2>The developer behind the work</h2>
                <div className={Styles['card-section']}>
                    <div className={Styles.card}>
                        <div className={Styles.wrapper}>
                            <div className={Styles.profileImage}>

                            </div>
                            <h3>Sheik Aahin</h3>
                            <p>// Frontend & Full-Stack Dev</p>
                            <div className={Styles.contactSection}>
                                <p>Chennai, India</p>
                                <p>B.E — CSE, 2023</p>
                                <p>2 Years Experience</p>
                                <p>Open to Opportunities</p>
                            </div>
                             <div className={Styles.skills}>
                                {
                                    skills.map((skill: string)=>{
                                        return <span key={skill}>{skill}</span>
                                    })
                                }
                             </div>
                        </div>
                    </div>
                    <div className={Styles.content}>
                        <p>I'm a <span>web developer with 2 years of hands-on experience</span> building scalable, performant web applications. I care deeply about clean code, great UX, and shipping products people actually love to use.</p>
                        <p>Started freelancing while in college, landed my first full-time role right after graduation. Since then I've worked across <span>startups and small agencies</span>, picking up the full stack along the way.</p>
                        <div className={Styles.timeline}>
                            <div>
                                <span>2024 - present</span>
                                <p>Web Developer</p>
                                <p>Zoho@Corporation, Chennai</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default About;