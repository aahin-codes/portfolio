'use client'
import { Navbar } from "@/_components/navbar/Navbar";
import Hero from "@/_components/hero/Hero";
import About from "@/_components/about/About";
import Skills from "@/_components/skills/Skills";
import Projects from "@/_components/projects/Projects";
import Contact from "@/_components/contact/Contact";
import { useMemo, useRef } from "react";
import Footer from "@/_components/footer/Footer";
import Experience from "@/_components/experience/Experience";

export default function Home() {

  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const certificationsRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useMemo(() => ({
    home: heroRef,
    experience: experienceRef,
    about: aboutRef,
    projects: projectsRef,
    skills: skillsRef,
    education: educationRef,
    certifications: certificationsRef,
    contact: contactRef,
  }), []);

  return (

    <div>
      {<Navbar sectionRefs={sectionRefs}/>}
      {<Hero ref={heroRef} sectionRefs={sectionRefs}/>}
       {<About ref={aboutRef} />}
      {<Experience ref={experienceRef} />}
      {<Skills ref={skillsRef} />}
      {<Projects ref={projectsRef} />}
      {<Contact ref={contactRef} />}
      {<Footer sectionRefs={sectionRefs}/>}
    </div>
  );
}
