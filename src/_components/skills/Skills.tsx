'use client'
import Styles from '@/_components/skills/Skills.module.scss';
import { forwardRef } from 'react';

type Skill = {
    skill: string;
};

type SkillCategory = {
    frontend?: Skill[];  // "?" means optional
    backend?: Skill[];
    stateManagement?: Skill[];
    toolsAndPlatforms?: Skill[];
    designAndWorkflow?: Skill[];
};


const skills: SkillCategory[] = [{
    frontend: [
        {
            skill: "React / Next.js"
        },
        {
            skill: "TypeScript"
        },
        {
            skill: "JavaScript (ES6+)"
        },
        {
            skill: "CSS / SCSS"
        },
        {
            skill: "HTML5"
        }
    ]
}, {
    backend: [
        {
            skill: "Node.js"
        }, {
            skill: "Express.js"
        },
        {
            skill: "MongoDB"
        },
        {
            skill: "REST APIs"
        }
    ]
}, {
    stateManagement: [
        {
            skill: "Redux"
        },
        {
            skill: "Context API"
        }
    ]
}, {
    toolsAndPlatforms: [
        {
            skill: "Git"
        },
        {
            skill: "Vercel"
        },
        {
            skill: "Vite"
        },
        {
            skill: "Axios"
        }
    ]
}, {
    designAndWorkflow: [
        {
            skill: "Figma"
        },
    ]
}] as const;

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className={Styles['skills-container']} ref={ref}>
            <div className={Styles.wrapper}>
                <span className={Styles.dot}>skills</span>
                <h2>Technical toolkit</h2>
                <div className={Styles['skill-cards']}>
                    <div className={`${Styles['skill-card']}`}>
                        <p>FRONTEND</p>
                        <div>
                            {
                                skills.map((techStack) => {

                                    return techStack.frontend?.map((skill, ind) => {
                                        return (

                                            <span key={skill.skill}>{skill.skill}</span>

                                        )
                                    })
                                })
                            }</div>
                    </div>
                    <div className={`${Styles['skill-card']}`}>
                        <p>BACKEND</p>
                        <div>
                            {
                                skills.map((techStack) => {

                                    return techStack.backend?.map((skill, ind) => {
                                        return (

                                            <span key={skill.skill}>{skill.skill}</span>
                                        )
                                    })
                                })
                            }</div>
                    </div>
                    <div className={`${Styles['skill-card']}`}>
                        <p>STATE MANAGEMENT</p>
                        <div>
                            {
                                skills.map((techStack) => {

                                    return techStack.stateManagement?.map((skill, ind) => {
                                        return (

                                            <span key={skill.skill}>{skill.skill}</span>

                                        )
                                    })
                                })
                            }</div>
                    </div>
                    <div className={`${Styles['skill-card']}`}>
                        <p>TOOLS AND PLATFORMS</p>
                        <div>
                            {
                                skills.map((techStack) => {

                                    return techStack.toolsAndPlatforms?.map((skill, ind) => {
                                        return (
                                            <span key={skill.skill + ind}>{skill.skill}</span>
                                        )
                                    })
                                })
                            }</div>
                    </div>
                    <div className={`${Styles['skill-card']}`}>
                        <p>DESIGN & WORKFLOW</p>
                        <div>
                            {
                                skills.map((techStack) => {

                                    return techStack.designAndWorkflow?.map((skill, ind) => {
                                        return (
                                            <span key={skill.skill}>{skill.skill}</span>

                                        )
                                    })
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
})

export default Skills;

