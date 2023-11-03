import { createContext, useState } from "react";

export const ThemeContext = createContext({
    theme: 'light',
    setTheme: () => {}
})

export const ThemeProvider = ({children}) => {
// localstorage to save theme choice
    const [theme, setTheme] = useState('light')

    return <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
}