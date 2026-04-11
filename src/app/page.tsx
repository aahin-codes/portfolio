'use client'
import { Navbar } from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import { useMemo, useRef } from "react";
import Footer from "@/components/footer/Footer";

export default function Home() {

  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs = useMemo(() => ({
    home: heroRef,
    about: aboutRef,
    work: projectsRef,
    skills: skillsRef,
    contact: contactRef,
  }), []);

  return (

    <div>
      {<Navbar sectionRefs={sectionRefs}/>}
      {<Hero ref={heroRef} sectionRefs={sectionRefs}/>}
      {<About ref={aboutRef} />}
      {<Skills ref={skillsRef} />}
      {<Projects ref={projectsRef} />}
      {<Contact ref={contactRef} />}
      {<Footer sectionRefs={sectionRefs}/>}
    </div>
  );
}
