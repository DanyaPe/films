import "../index.css";
import { useMovieList } from "../contexts/movieList/MovieListContext.js";
import { useSearch } from "../contexts/search/SearchContext.js";
import { useLanguage } from "../contexts/language/LanguageContext.js";
import MovieList from "./MovieList.jsx";
import Preloader from "./Preloader";
import text from "../internationalization/translations.js";

export default function Movies() {
    const { movieList } = useMovieList();
    const { isLoading } = useSearch();
    const { language } = useLanguage();

    return (
        <section className="flex flex-col justify-center gap-y-5">
            {movieList.length ? (
                <MovieList />
            ) : isLoading ? (
                <Preloader />
            ) : (
                <p className="text-cyan-900 dark:text-amber-50 font-spotify text-sm md:text-base xl:text-lg">
                    {text(language, "no_results")}
                </p>
            )}
        </section>
    );
}
