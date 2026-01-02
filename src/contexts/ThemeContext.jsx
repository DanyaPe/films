import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

export function ThemeProvider() {
    const [darkTheme, setDarkTheme] = useState(
        document.documentElement.classList.contains("dark")
    );
    const [isFirstRender, setFirstRender] = useState(true);

    return (
        <ThemeContext.Provider
            value={{ darkTheme, setDarkTheme, isFirstRender, setFirstRender }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error(
            "useTheme необходимо использовать внутри ThemeProvider"
        );
    }

    return context;
}
