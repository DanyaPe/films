import { useState } from "react";
import { LanguageContext } from "./LanguageContext.js";

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("ru");
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}
