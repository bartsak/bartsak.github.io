import '@emotion/react'
import {ThemeGlobalType, ThemeModeType} from "./components/theme/types";

export enum Languages {
    RU = 'ru',
    EN = 'en'
}

export enum Themes {
    DARK = 'dark',
    LIGHT = 'light'
}

declare module '@emotion/react' {
    export interface Theme extends ThemeModeType, ThemeGlobalType {}
}