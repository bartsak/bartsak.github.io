import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import {useCallback, useState, useContext} from "react";
import i18n from "i18next";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import styled from "@emotion/styled";
import {LANGUAGES, LOCAL_STORAGE, THEMES} from "../../const";
import {ToggleThemeContext} from "../theme";
import {useTheme} from "@emotion/react";

const LINKS = [
    { href: '/',     icon: <HomeOutlinedIcon fontSize="large" /> },
    { href: '/blog', icon: <ArticleOutlinedIcon fontSize="large" /> },
]

const MenuBar = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
`

const MenuLink = styled.a`
  color: ${props => props.theme.colors.link};
  padding-top: 20px;
  transition: color ${props => props.theme.variables.transitionDuration};
`

const Toggle = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.link};
  padding-top: 20px;
  transition: color ${props => props.theme.variables.transitionDuration};
`

export const Menu = () => {
    const {themeMode, setThemeMode} = useContext(ToggleThemeContext)

    const handleChangeLanguage = useCallback(async () => {
        await i18n.changeLanguage(i18n.language === LANGUAGES.RU ? LANGUAGES.EN : LANGUAGES.RU)
        localStorage.setItem(LOCAL_STORAGE.LANG, i18n.language)
    }, [])

    const handleChangeTheme = useCallback(() => {
        setThemeMode(themeMode === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)
    }, [themeMode])

    return (
        <MenuBar className="menu">
            {LINKS.map(({href, icon}) => (<MenuLink key={href} href={href}>{icon}</MenuLink>))}
            <Toggle onClick={handleChangeLanguage}>
                <LanguageOutlinedIcon fontSize="large" />
            </Toggle>
            <Toggle onClick={handleChangeTheme}>
                {
                    themeMode === THEMES.LIGHT ? <WbSunnyOutlinedIcon fontSize="large" /> : <DarkModeOutlinedIcon fontSize="large" />
                }

            </Toggle>
        </MenuBar>
    )
}