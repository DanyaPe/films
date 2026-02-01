import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext.js";

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(
        document.documentElement.classList.contains("dark"),
    );
    const [isFirstRender, setFirstRender] = useState(true);
    const [isScrollLock, setScrollLock] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isScrollLock ? "hidden" : "";
    }, [isScrollLock]);

    return (
        <ThemeContext.Provider
            value={{
                darkTheme,
                setDarkTheme,
                isFirstRender,
                setFirstRender,
                isScrollLock,
                setScrollLock,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}
