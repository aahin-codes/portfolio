'use client'
import Styles from '@/_components/footer/Footer.module.scss';
import { FaRegCopyright } from "react-icons/fa6";
import { FaHeart, FaLongArrowAltUp } from "react-icons/fa";
import { RefObject } from 'react';

interface SectionRefs {
  home: RefObject<HTMLDivElement | null>;
  about: RefObject<HTMLDivElement | null>;
  project: RefObject<HTMLDivElement | null>;
  skills: RefObject<HTMLDivElement | null>;
  contact: RefObject<HTMLDivElement | null>;
}

interface footerProps {
  sectionRefs: SectionRefs;
}

const Footer = ({sectionRefs}:footerProps) => {
  return (
    <div className={Styles.footerContainer}>
      <div className={Styles.wrapper}>
        <div className={Styles.left}>
          <p>aahin<span>.</span>k@portfolio</p>
          <p><FaRegCopyright /> {new Date().getFullYear()} Sheik Aahin · Built with Next.js & <FaHeart /></p>
        </div>
        <div className={Styles.right}>
          <div>
              <button type="button" onClick={
                ()=>{
                  sectionRefs.about.current?.scrollIntoView({behavior:"smooth"})
                }
              }>about</button>
              <button type="button" onClick={
                ()=>{
                  sectionRefs.project.current?.scrollIntoView({behavior:"smooth"})
                }
              }>project</button>
              <button type="button" onClick={
                ()=>{
                  sectionRefs.contact.current?.scrollIntoView({behavior:"smooth"})
                }
              }>contact</button>
          </div>
           <button type="button"  onClick={
                ()=>{
                  sectionRefs.home.current?.scrollIntoView({behavior:"smooth"})
                }
              }><FaLongArrowAltUp />top</button>
        </div>
      </div>
    </div>
  )
}

export default Footer;