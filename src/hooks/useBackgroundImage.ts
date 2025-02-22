import { useContext, useEffect, useState } from "react"
import {ThemeContext} from '../context/ThemeContext'
import MobileLightBackground from '../assets/images/bg-mobile-light.jpg'
import MobileDarkBackground from '../assets/images/bg-mobile-dark.jpg'
import DesktopLightBackground from '../assets/images/bg-desktop-light.jpg'
import DesktopDarkBackground from '../assets/images/bg-desktop-dark.jpg'


export function useBackgroundImage (isMobile: Boolean){
    const {theme, setTheme}= useContext(ThemeContext) as any

 
    const getBackgroundImage=() => {
        if(isMobile){
          return theme === 'light' ? MobileLightBackground: MobileDarkBackground
        }else{
          return theme === 'light' ? DesktopLightBackground: DesktopDarkBackground
        }
      }


    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
      };
      return {theme, handleTheme, getBackgroundImage}

}