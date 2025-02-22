import React, {useState} from 'react'

export const ThemeContext = React.createContext({})

export default function ThemeContextProvider({children}:any) {
    const [theme,setTheme]= useState('light')
return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
)
}