import { useState } from "react";
import { SearchContext } from "./SearchContext.js";
import { useFilter } from "../filter/FilterContext.js";
import { useMovieList } from "../movieList/MovieListContext.js";
import { useTheme } from "../theme/ThemeContext.js";
import { fetchResultList } from "../../utils/fetchMovieList.js";

export function SearchProvider({ children }) {
    const [title, setTitle] = useState(" ");
    const [isLoading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [isEnd, setEnd] = useState(false);
    const { filter } = useFilter();
    const { movieList, setMovieList } = useMovieList();
    const { setFirstRender } = useTheme();

    const handleSearch = async (currentText) => {
        setLoading(true);
        setFirstRender(false);

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
                setTitle,
                isLoading,
                setLoading,
                page,
                setPage,
                isEnd,
                setEnd,
                handleSearch,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}
