import { useState } from "react";
import { SearchContext } from "./SearchContext.js";
import { useFilter } from "../filter/FilterContext.js";
import { useMovieList } from "../movieList/MovieListContext.js";
import { useTheme } from "../theme/ThemeContext.js";
import { fetchResultList } from "../../utils/fetchMovieList.js";
import sleep from "../../utils/sleep.js";

export function SearchProvider({ children }) {
    const [title, setTitle] = useState(" ");
    const [isLoading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [isEnd, setEnd] = useState(false);
    const { filter } = useFilter();
    const { movieList, setMovieList } = useMovieList();
    const { setFirstRender } = useTheme();

    const handleSearch = async (currentText) => {
        setFirstRender(false);
        await sleep(1000);
        setLoading(true);

        const isAnotherTitle = title !== currentText;
        if (isAnotherTitle) setTitle(currentText);

        const result = await fetchResultList(
            currentText,
            String(isAnotherTitle ? 1 : page + 1),
            filter
        );

        setMovieList(
            (isAnotherTitle ? [] : movieList).concat(
                Array.from(
                    new Map(
                        result.map((movie) => [movie.imdbID, movie])
                    ).values()
                )
            )
        );
        setPage(isAnotherTitle ? 1 : page + 1);
        setEnd(result.length < (filter === "all" ? 20 : 10) ? true : false);
        setLoading(false);
    };

    return (
        <SearchContext.Provider
            value={{
                title,
                isLoading,
                isEnd,
                handleSearch,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}
