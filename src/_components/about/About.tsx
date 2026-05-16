'use client'
import Styles from '@/_components/about/About.module.scss';
import { forwardRef } from 'react';

const skills = ['React', 'TypeScript', 'Node.js', 'Next.js', 'MongoDB'] as const;

const About = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className={Styles['about-container']} ref={ref}>
            <div className={Styles.wrapper}>
                <span className={Styles.dot}>About me</span>
                <h2>The developer behind the work</h2>
                <div className={Styles.section}>
                    <div className={Styles.left}>
                        <h3>Sheik Aahin</h3>
                        <p>Frontend & Full-Stack Dev</p>
                         <div className={Styles.skills}>
                            {
                                skills.map((skill: string) => {
                                    return <span key={skill}>{skill}</span>
                                })
                            }
                        </div>
                        <div className={Styles.contactSection}>
                            <p><span>Location:</span> Chennai, India</p>
                            <p><span>Degree:</span> B.E — CSE, 2023</p>
                            <p><span>Status:</span> Open to work</p>
                        </div>
                       

                    </div>
                    <div className={Styles.right}>
                        <p>I'm a web developer with 2 years building scalable, performant web applications. I care about clean code, great UX, and shipping things people actually use.</p>
                        <p>Currently contracting at ManageEngine (Zoho), where I've built and maintained web pages across 19+ enterprise products — handling SEO, Core Web Vitals, and cross-team content publishing.</p>
                        <p className={Styles.quote}>I don't just build interfaces — I build the experience behind them.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
})

export default About;