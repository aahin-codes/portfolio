'use client'

import { useState } from "react";
import { IoMdClose } from "react-icons/io";

type ThemeType =
    | "light"
    | "dark"
    | "ocean-blue"
    | "sage-teal"
    | "amber"
    | "deep-blue";
export const ThemeSide = () => {
    const themes: ThemeType[] = ["light", "dark", "ocean-blue", "sage-teal", "amber", "deep-blue"];
    const [open, setOpen] = useState(false);
  return (
  
        <div className='theme-side'>
            {open? <>
            {
                themes.map((theme) => (
                    <button key={theme} className={`theme-${theme}`} onClick={() => {
                        document.body.setAttribute('data-theme', theme);
                    }}></button>
                ))

                
            }
            <span><IoMdClose onClick={() => setOpen(false)} /></span>
            </>: <button onClick={() => setOpen(true)}></button>}
        </div>
  )
}
