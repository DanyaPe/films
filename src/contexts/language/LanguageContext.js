import { createContext, useContext } from "react";

export const LanguageContext = createContext(undefined);

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (context === undefined) {
        throw new Error(
            "useFilter необходимо использовать внутри FilterProvider"
        );
    }

    return context;
}
