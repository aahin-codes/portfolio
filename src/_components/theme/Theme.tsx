'use client'

import { ThemeContext } from "@/_context/ThemeContext";
import { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";

type ThemeType =
    | "light"
    | "dark"
    | "ocean-blue"
    | "sage-teal"
    | "amber"
    | "deep-blue";
export const ThemeSide = () => {
    const { theme, setTheme } = useContext(ThemeContext)!;
    const themes: ThemeType[] = ["light", "dark", "ocean-blue", "sage-teal", "amber", "deep-blue"];
    const [open, setOpen] = useState(false);
    return (

        <div className='theme-side'>
            {open ? <>
                {
                    themes.map((theme) => (
                        <button key={theme} className={`theme-${theme}`} onClick={
                            ()=>{setTheme(theme)}
                        }></button>
                    ))
                }
                <span><IoMdClose onClick={() => setOpen(false)} /></span>
            </> : <button onClick={() => setOpen(true)}></button>}
        </div>
    )
}
