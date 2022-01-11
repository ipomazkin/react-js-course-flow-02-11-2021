import { createContext } from 'react';

export const THEME_DARK = 'dark';
export const THEME_LIGHT = 'light';

export const themeContext = createContext(THEME_LIGHT);

export const ThemeProvider = themeContext.Provider;
export const ThemeConsumer = themeContext.Consumer;
