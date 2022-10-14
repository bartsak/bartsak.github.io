import React from 'react';
import i18n from "i18next"
import { initReactI18next } from "react-i18next";
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LOCAL_STORAGE, LANGUAGES } from './const'
import {ThemeWrapper} from "./components/theme";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            [LANGUAGES.EN]: {
                translation: {
                    "hello": "Hello, my name is Rustam",
                    "whoiam": "I am web-developer"
                }
            },
            [LANGUAGES.RU]: {
                translation: {
                    "hello": "Привет, меня зовут Рустам",
                    "whoiam": "Я веб-разработчик"
                }
            }
        },
        lng: localStorage.getItem(LOCAL_STORAGE.LANG) || LANGUAGES.RU,
        fallbackLng: LANGUAGES.RU,
        interpolation: {
            escapeValue: false
        }
    });


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
      <ThemeWrapper>
          <App />
      </ThemeWrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
