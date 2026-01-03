import { createContext, useContext, useState } from "react";

const FilterContext = createContext(undefined);

export function FilterProvider({ children }) {
    const FILTERS = ["all", "movie", "series"];
    const [filter, setFilter] = useState("all");

    return (
        <FilterContext.Provider value={{ filter, setFilter, FILTERS }}>
            {children}
        </FilterContext.Provider>
    );
}

export function useFilter() {
    const context = useContext(FilterContext);

    if (context === undefined) {
        throw new Error(
            "useFilter необходимо использовать внутри FilterProvider"
        );
    }

    return context;
}
