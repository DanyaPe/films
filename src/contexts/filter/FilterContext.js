import { createContext, useContext } from "react";

export const FilterContext = createContext(undefined);

export function useFilter() {
    const context = useContext(FilterContext);

    if (context === undefined) {
        throw new Error(
            "useFilter необходимо использовать внутри FilterProvider"
        );
    }

    return context;
}
