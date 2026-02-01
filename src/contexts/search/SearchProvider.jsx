import { useReducer } from "react";
import { SearchContext } from "./SearchContext.js";
import { useFilter } from "../filter/FilterContext.js";
import { useMovieList } from "../movieList/MovieListContext.js";
import { useTheme } from "../theme/ThemeContext.js";
import { fetchResultList } from "../../utils/API.js";
import sleep from "../../utils/sleep.js";

export function SearchProvider({ children }) {
    const { filter } = useFilter();
    const { setMovieList } = useMovieList();
    const { setFirstRender } = useTheme();
    const delay = 1000;

    const reducer = (state, action) => {
        switch (action.type) {
            case "Search_start":
                return {
                    ...state,
                    title: action.payload.title,
                    page: 1,
                    isLoading: true,
                    isEnd: false,
                };
            case "Search_continue":
                return {
                    ...state,
                    page: state.page + 1,
                    isLoading: true,
                };
            case "Search_end":
                return {
                    ...state,
                    isLoading: false,
                    isEnd: action.payload.isEnd,
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, {
        title: "",
        isLoading: false,
        page: 0,
        isEnd: false,
    });

    const handleSearch = async (currentText) => {
        setFirstRender(false);

        const isAnotherTitle = state.title !== currentText;
        let currentPage = state.page;

        if (isAnotherTitle) {
            setMovieList([]);
            dispatch({
                type: "Search_start",
                payload: { title: currentText },
            });
            currentPage = 1;
            await sleep(delay);
        } else {
            dispatch({
                type: "Search_continue",
            });
            currentPage++;
        }

        const result = await fetchResultList(
            currentText,
            String(currentPage),
            filter,
        );

        setMovieList((prev) =>
            prev.concat(
                Array.from(
                    new Map(
                        result.map((movie) => [movie.imdbID, movie]),
                    ).values(),
                ),
            ),
        );
        dispatch({
            type: "Search_end",
            payload: {
                newMovie: result,
                isEnd:
                    result.length < (filter === "all" ? 20 : 10) ? true : false,
            },
        });
    };

    return (
        <SearchContext.Provider
            value={{
                title: state.title,
                isLoading: state.isLoading,
                isEnd: state.isEnd,
                handleSearch,
                delay,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}
