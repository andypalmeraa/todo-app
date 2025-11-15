import React, {useState} from 'react'

export const ThemeContext = React.createContext({})

export default function ThemeContextProvider({children}:any) {
    const [theme,setTheme]= useState('light')

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
        <ThemeContext.Provider value={{theme, handleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}