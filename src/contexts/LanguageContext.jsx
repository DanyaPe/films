import { createContext, useContext, useState } from "react";

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("ru");
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (context === undefined) {
        throw new Error(
            "useLanguage должен использоваться внутри LanguageProvider"
        );
    }

    return context;
}
