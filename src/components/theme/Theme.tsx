import {ThemeProvider} from "@emotion/react";
import React, {FC, useEffect, useState} from "react";
import {ToggleThemeContext} from "./ToggleTheme";
import {LOCAL_STORAGE, THEMES} from "../../const";
import {ThemeGlobalType, ThemeModeType} from "./types";
import {Themes} from "../../types";

const lightTheme: ThemeModeType = {
    colors: {
        background: '#fff',
        color: '#000',
        gridColor: '#e1e1e1',
        link: '#00bcd4'
    }
}

const darkTheme: ThemeModeType = {
    colors: {
        background: '#000',
        color: '#fff',
        gridColor: '#3a3a3a',
        link: '#fff'
    }
}

const globalTheme: ThemeGlobalType = {
    variables: {
        grid: '25px',
        fieldBorderWidth: '2px',
        transitionDuration: '1s',
        fontSize: '20px'
    }
}

export const ThemeWrapper: FC<{children: React.ReactNode}> = ({ children }) => {
    const [themeMode, setThemeMode] = useState(localStorage.getItem(LOCAL_STORAGE.THEME) as Themes || THEMES.LIGHT)
    const [theme, setTheme] = useState({...(themeMode === THEMES.LIGHT ? lightTheme : darkTheme), ...globalTheme})

    useEffect(() => {
        setTheme({...(themeMode === THEMES.LIGHT ? lightTheme : darkTheme), ...globalTheme})
        localStorage.setItem(LOCAL_STORAGE.THEME, themeMode)
    }, [themeMode])

    return (
        <ToggleThemeContext.Provider value={{themeMode, setThemeMode}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ToggleThemeContext.Provider>
    )
}