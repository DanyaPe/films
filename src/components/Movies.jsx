import "../index.css";
import Preloader from "./Preloader";
import MovieList from "./MovieList.jsx";
import text from "../internationalization/translations.js";

export default function Movies(props) {
    const { movieList, filter, isEnd, title, handleSearch, loading, language } =
        props;

    return (
        <section className="flex flex-col justify-center gap-y-5">
            {movieList.length ? (
                <MovieList
                    movieList={movieList}
                    filter={filter}
                    isEnd={isEnd}
                    title={title}
                    loading={loading}
                    handleSearch={handleSearch}
                    language={language}
                />
            ) : loading ? (
                <Preloader language={language} />
            ) : (
                <p className="text-cyan-900 dark:text-amber-50 font-spotify text-sm md:text-base xl:text-lg">
                    {text(language, "no_results")}
                </p>
            )}
        </section>
    );
}
