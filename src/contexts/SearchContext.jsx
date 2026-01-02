import { createContext, useContext, useState } from "react";

const SearchContext = createContext(undefined);

export function SearchProvider() {
    const [text, setText] = useState(" ");
    const [isLoading, setLoading] = useState(false);

    return (
        <SearchContext.Provider
            value={{ text, setText, isLoading, setLoading }}
        >
            {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    const context = useContext(SearchContext);

    if (context === undefined) {
        throw new Error(
            "useSearch необходимо использовать внутри SearchProvider"
        );
    }

    return context;
}
