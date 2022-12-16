import React, { useState, useEffect } from "react";
import ThemeContext from "./themeContext";

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode ] = useState()

    useEffect(()=> {
        const theme = window.localStorage.getItem('theme');
        if(theme === undefined){
            setIsDarkMode(true)
        } else if(theme === 'true') {
            setIsDarkMode(true)
        } else {
            setIsDarkMode(false)
        }
    }, [])
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
        window.localStorage.setItem('theme', !isDarkMode)
    }
    const element = document.querySelector('#root');

    isDarkMode ? element.classList.add('darkmode'):
    element.classList.remove('darkmode')

    return(
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}