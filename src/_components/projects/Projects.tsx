'use client'
import Styles from '@/_components/projects/Projects.module.scss';
import Link from 'next/link';
import { forwardRef } from 'react';

type TechStack = {
    name: string
}
type ProjectLink = {
    label: string,
    url: string
}
type Project = {
    title: string,
    description: string,
    teckStacks: TechStack[],
    links: ProjectLink[]
}
const projects: Project[] = [
    {
        title: "CateringServ — Catering Service Website",
        description: "A fully structured multi-page catering business website featuring dedicated pages for menu, events, services and contact. Built with semantic HTML and hand-crafted CSS layouts.",
        teckStacks: [
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "Responsive Design" }
        ],
        links: [
            { label: "live demo", url: "https://aahin-codes.github.io/CateringServ" },
            { label: "github", url: "https://github.com/aahin-codes/CateringServ" }
        ]
    },
    {
        title: "KasimTech — Tech Company Landing Page",
        description: "A clean, professional landing page for a technology company. Focused on layout structure, visual hierarchy and pixel-perfect CSS styling from scratch.",
        teckStacks: [
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "UI Design" }
        ],
        links: [
            { label: "live demo", url: "https://aahin-codes.github.io/KasimTech" },
            { label: "github", url: "https://github.com/aahin-codes/KasimTech" }
        ]
    },
    {
        title: "React Projects — Component Library",
        description: "A collection of React components and mini-applications built while mastering React hooks, state management and SCSS styling. 68 commits of consistent practice.",
        teckStacks: [
            { name: "React" },
            { name: "JavaScript" },
            { name: "SCSS" },
            { name: "CSS3" }
        ],
        links: [
            { label: "live demo", url: "https://aahin-codes.github.io/react-projects" },
            { label: "github", url: "https://github.com/aahin-codes/react-projects" }
        ]
    }
]
const Projects = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className={Styles.projectContainer} ref={ref}>
            <div className={Styles.wrapper}>
                <span className={Styles.dot}>my work</span>
                <h2>Projects</h2>
                {/* <p>// 12 projects · 3 live in production</p> */}
                {/* <div className={Styles.tabs}>
                    <span>All</span>
                    <span>React</span>
                    <span>Node.js</span>
                </div> */}
                <div className={Styles.projectCards}>
                    <div className={Styles.wrapper}>
                        {
                            projects.map((project, ind) => {
                                return (
                                    <div className={Styles.projectCard} key={ind}>
                                        <span>Featured</span>
                                        <div className={Styles.left} data-project-number={`0${ind + 1}`}>
                                            <h2>{project.title}</h2>
                                            <p>{project.description}</p>
                                            <div className={Styles.skills}>
                                                {
                                                    project.teckStacks.map(tech => {
                                                        return <span key={tech.name}>{tech.name}</span>
                                                    })
                                                }

                                            </div>
                                            <div className={Styles.buttonWrapper}>
                                                {project.links.map(link => {
                                                    return (<button key={link.label}><Link href={link.url} target='b
                                                        _blank' rel='noopener noreferrer nofollow'>{link.label}</Link></button>)
                                                })}
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                        <div className={`${Styles.projectCard} ${Styles.soon}`}>
                            <span>Cooking</span>
                            <div className={Styles.left} data-project-number={`00`}>
                                <h2>Amazing One</h2>
                                <p>Coming soon</p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
})

export default Projects