import { useState } from "react";
import { FilterContext } from "./FilterContext.js";

export function FilterProvider({ children }) {
    const FILTERS = ["all", "movie", "series"];
    const [filter, setFilter] = useState("all");

    return (
        <FilterContext.Provider value={{ filter, setFilter, FILTERS }}>
            {children}
        </FilterContext.Provider>
    );
}
