'use client'
import Styles from '@/_components/skills/Skills.module.scss';
import { forwardRef } from 'react';

type Skill = {
    skill: string;
    number: number;
};

type SkillCategory = {
    frontend?: Skill[];  // "?" means optional
    backend?: Skill[];
};


const skills: SkillCategory[] = [{
    frontend: [
        {
            skill: "React / Next.js",
            number: 75
        },
        {
            skill: "TypeScript",
            number: 65
        },
        {
            skill: "JavaScript (ES6+)",
            number: 79
        },
        {
            skill: "CSS /SCSS",
            number: 85
        }
    ]
}, {
    backend: [
        {
            skill: "Node.js / Express",
            number: 81
        },
        {
            skill: "MongoDB",
            number: 69
        },
        {
            skill: "REST APIs",
            number: 70
        }
    ]
}] as const;

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className={Styles['skills-container']} ref={ref}>
            <div className={Styles.wrapper}>
                <span className={Styles.underScore}>skills</span>
                <h2>Technical toolkit</h2>
                <div className={Styles['skill-cards']}>
                    <div className={`${Styles['skill-card']} ${Styles['front-end']}`}>
                        <p>FRONTEND</p>
                        {
                            skills.map((techStack) => {

                                return techStack.frontend?.map((skill,ind) => {
                                    return (
                                        <div style={{ "--skill-width": `${skill.number}%` }as React.CSSProperties} key={skill+""+ind}>
                                            <span>{skill.skill}</span>
                                            <span >{skill.number}</span>
                                        </div>
                                    )
                                })
                            })
                        }
                        {/* <div>
                            <span>React/Next.js</span>
                            <span>75</span>
                        </div>
                        <div>
                            <span>TypeScript</span>
                            <span>85</span>
                        </div>
                        <div>
                            <span>CSS / SCSS</span>
                            <span>91</span>
                        </div>
                        <div>
                            <span>JavaScript (ES6+)</span>
                            <span>87</span>
                        </div> */}
                    </div>
                    <div className={`${Styles['skill-card']} ${Styles['back-end']}`}>
                        <p>BACKEND & TOOLS</p>
                         {
                            skills.map((techStack) => {

                                return techStack.backend?.map((skill,ind) => {
                                    return (
                                        <div style={{ "--skill-width": `${skill.number}%` } as React.CSSProperties} key={skill+""+ind}>
                                            <span>{skill.skill}</span>
                                            <span >{skill.number}</span>
                                        </div>
                                    )
                                })
                            })
                        }
                        {/* <div>
                            <span>Node.js / Express</span>
                            <span>75</span>
                        </div>
                        <div>
                            <span>MongoDB</span>
                            <span>85</span>
                        </div>
                        <div>
                            <span>REST APIs </span>
                            <span>91</span>
                        </div>
                        <div>
                            <span>Git / GitHub Actions</span>
                            <span>87</span>
                        </div> */}
                    </div>
                </div>
                <p>Also worked with</p>
                <div>
                    <span>Figma</span>
                    <span>Redux</span>
                    <span>Axios</span>
                    <span>Vercel</span>
                    <span>Vite</span>
                    <span>Git</span>

                </div>
            </div>
        </div>
    )
})

export default Skills;

