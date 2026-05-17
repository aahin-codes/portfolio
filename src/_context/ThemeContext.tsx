import { createContext, useState } from 'react'

type ThemeContextType = {
    theme:string,
    setTheme:(theme:string)=>void
}

type theme = "light" | "dark" | "ocean-blue" | "sage-teal" | "amber" | "deep-blue";

export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({children}:{children:React.ReactNode}) {

    const [theme, setThemeState] = useState('light' as theme);

    
    function setTheme(theme:string){
        setThemeState(theme as theme);
        document.body.setAttribute('data-theme', theme);
    }

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}







