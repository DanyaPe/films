import { useFilter } from "../contexts/filter/FilterContext.js";
import { useMovieList } from "../contexts/movieList/MovieListContext.js";
import { useSearch } from "../contexts/search/SearchContext.js";
import { useLanguage } from "../contexts/language/LanguageContext.js";
import text from "../internationalization/translations.js";
import Preloader from "./Preloader.jsx";
import MovieCard from "./MovieCard.jsx";

export default function MovieList() {
    const { movieList } = useMovieList();
    const { filter } = useFilter();
    const { title, isEnd, isLoading, handleSearch } = useSearch();
    const { language } = useLanguage();

    return (
        <>
            <ul className="flex flex-wrap justify-center gap-5">
                {movieList.map((movieElement) => {
                    if (filter === "all" || filter === movieElement.Type)
                        return (
                            <li key={movieElement.imdbID}>
                                <MovieCard {...movieElement} />
                            </li>
                        );
                })}
            </ul>
            <div className="flex justify-center">
                {isEnd ? (
                    <p className="text-cyan-900 dark:text-amber-50 font-spotify text-sm md:text-base xl:text-lg">
                        {text(language, "all_results")}
                    </p>
                ) : isLoading ? (
                    <Preloader />
                ) : (
                    <button
                        className="border-2 font-spotify text-cyan-900 hover:text-amber-50 hover:bg-gray-800 dark:text-amber-50 dark:hover:bg-white dark:hover:text-gray-800 rounded-2xl duration-300 ease-in-out p-2 text-xs md:text-sm lg:text-base xl:text-xl"
                        onClick={() => handleSearch(title)}
                    >
                        {text(language, "more_results")}
                    </button>
                )}
            </div>
        </>
    );
}
