import { forwardRef } from 'react';
import Styles from './Experience.module.scss';

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className={Styles.experienceContainer} ref={ref}>
            <div className={Styles.wrapper}>
                <span className={Styles.underScore}>Experience</span>
                <h2>Where I've worked</h2>

                <div className={Styles.experienceList}>
                    <div className={Styles.experienceItem}>
                        <div>
                            <span>Sep 2024</span>
                            <span>Present</span>
                        </div>
                        <div>
                            <h2>Web Developer</h2>
                            <p>ManageEngine · Zoho Corporation, Chennai</p>
                            <span>Contract</span>
                            <ul>
                                <li>Built and maintained web pages for 19+ enterprise products — ADMP, M365, LOG360, ELA and more</li>
                                <li>Applied SEO best practices: metadata, canonical tags, structured content — improved organic rankings</li>
                                <li>Optimised Core Web Vitals (LCP, CLS, FID) for Google search performance</li>
                                <li>Managed content publishing via OpenCMS — page creation, version control, multi-team workflows</li>
                                <li>Delivered responsive, cross-browser layouts using HTML5, CSS3, SASS/SCSS, Bootstrap, Tailwind CSS</li>
                            </ul>
                            <div className={Styles.skills}>
                                <span>HTML5</span>
                                <span>CSS3</span>
                                <span>SASS/SCSS</span>
                                <span>Bootstrap</span>
                                <span>Tailwind CSS</span>
                                <span>OpenCMS</span>
                                <span>SEO/SEM</span>
                                <span>Core Web Vitals</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Experience