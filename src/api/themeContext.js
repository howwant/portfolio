import { createContext } from "react";

const ThemeContext = createContext({
    isDarkMode: false,
    toggleDarkMode: null,
});

export default ThemeContext;