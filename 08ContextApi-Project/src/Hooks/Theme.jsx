import React, { createContext, useContext } from "react";


export const themeContext = createContext({
    theme: "light",
    darkTheme: () => { },
    lightTheme: () => { }
})

export const ThemeProvider = themeContext.Provider

export const useTheme = () => {
    return useContext(themeContext)
}