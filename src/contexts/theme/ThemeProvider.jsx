import { useState } from "react";
import { ThemeContext } from "./ThemeContext.js";

export function ThemeProvider({ children }) {
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
