import "../index.css";
import { useEffect, useState } from "react";
import { SearchProvider } from "../contexts/search/SearchProvider";
import { MovieListProvider } from "../contexts/movieList/MovieListProvider";
import { FilterProvider } from "../contexts/filter/FilterProvider";
import { useTheme } from "../contexts/theme/ThemeContext.js";
import SearchInput from "./SearchInput";
import HomePage from "./HomePage.jsx";
import SearchPage from "./SearchPage.jsx";
import ArrowUp from "./ArrowUp.jsx";

export default function Main() {
    const { isFirstRender } = useTheme();

    const [searchStart, setSearchStart] = useState(!isFirstRender);

    useEffect(() => {
        let timer;
        if (isFirstRender) {
            timer = setTimeout(() => setSearchStart(false), 1000);
        } else {
            timer = setTimeout(() => setSearchStart(true), 1000);
        }
        return () => clearTimeout(timer);
    }, [isFirstRender]);

    return (
        <FilterProvider>
            <MovieListProvider>
                <SearchProvider>
                    <main className="bg-lime-50 dark:bg-gray-800 flex flex-col items-center py-2 gap-y-5 grow">
                        <SearchInput />
                        {searchStart ? <SearchPage /> : <HomePage />}
                        <ArrowUp />
                    </main>
                </SearchProvider>
            </MovieListProvider>
        </FilterProvider>
    );
}
