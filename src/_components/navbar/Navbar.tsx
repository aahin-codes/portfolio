'use client'
import Styles from '@/_components/navbar/Navbar.module.scss';
import { ThemeContext } from '@/_context/ThemeContext';
import { useEffect, useState, forwardRef, RefObject, useContext } from 'react';
import { BsFillMoonStarsFill, BsMoon} from "react-icons/bs";



interface SectionRefs {
  home: RefObject<HTMLDivElement | null>;
  about: RefObject<HTMLDivElement | null>;
  experience: RefObject<HTMLDivElement | null>;
  projects: RefObject<HTMLDivElement | null>;
  skills: RefObject<HTMLDivElement | null>;
  certifications: RefObject<HTMLDivElement | null>;
  education: RefObject<HTMLDivElement | null>;
  contact: RefObject<HTMLDivElement | null>;
}

interface NavbarProps {
  sectionRefs: SectionRefs;
}

const NAV_LINKS = ['about', 'experience', 'skills','projects', 'contact'] as const;
type NavLink = typeof NAV_LINKS[number];

export const Navbar = ({ sectionRefs }: NavbarProps) => {

  const [activeLink, setActiveLink] = useState('home');
  const {theme, setTheme} = useContext(ThemeContext)!;
  
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_LINKS.forEach((key) => {
      const el = sectionRefs[key].current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveLink(key);
          }
        },
        { threshold: 0.8 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    // Cleanup all observers on unmount
    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionRefs]);

  useEffect(()=>{},[])

  
  function handleNavClick(key: NavLink) {
    setActiveLink(key);
    sectionRefs[key]?.current?.scrollIntoView({ behavior: 'smooth' });
  }


  function onUpdateActiveLink(value: string) {
    setActiveLink(value);
  }
  return (
    <nav className={`${Styles.nav}`}>
      <div className={Styles['left-container']}>
        <p>aahin<span>.</span>k<span>@</span>portfolio</p>
      </div>
      <div className={Styles['middle-container']}>
        <div className={Styles.wrapper}>
          <ul>
            {NAV_LINKS.map((key) => (
              <li
                key={key}
                className={activeLink === key ? Styles['active-link'] : ''}
                onClick={() => handleNavClick(key)}
              >
                {key}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={Styles['right-container']}>
        {theme === 'light' ? (
          <BsFillMoonStarsFill onClick={() => {
            setTheme('dark');
          }} />
        ) : theme === 'dark' ? (
          <BsMoon onClick={() => {
            setTheme('light');
          }} />
        ):null}
        <button type='button'>resume</button>
      </div>
    </nav>
  )

};
