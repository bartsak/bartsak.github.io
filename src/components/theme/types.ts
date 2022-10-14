import {Themes} from "../../types";
import {Dispatch, SetStateAction} from "react";

export type ThemeContextType = {
    themeMode: Themes, setThemeMode: Dispatch<SetStateAction<Themes>>
}

export interface ThemeModeType {
    colors: {
        background: string
        color: string
        gridColor: string
        link: string
    }
}

export interface ThemeGlobalType {
    variables: {
        grid: string
        fieldBorderWidth: string
        transitionDuration: string
        fontSize: string
    }
}