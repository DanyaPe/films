import { createContext, useContext } from "react";

export const SearchContext = createContext(undefined);

export function useSearch() {
    const context = useContext(SearchContext);

    if (context === undefined) {
        throw new Error(
            "useSearch необходимо использовать внутри SearchProvider"
        );
    }

    return context;
}
