import "../index.css";
import Movie from "./Movie";
import Preloader from "./Preloader";
import text from "../internationalization/translations.js";

export default function Movies(props) {
    const { movieList, filter, isEnd, title, handleSearch, loading, language } =
        props;

    return (
        <div className="flex flex-col px-20 justify-center">
            {movieList.length ? (
                <>
                    <div className="flex flex-wrap justify-center">
                        {movieList.map((movieElement) => {
                            if (
                                filter === "all" ||
                                filter === movieElement.Type
                            )
                                return (
                                    <Movie
                                        key={movieElement.imdbID}
                                        {...movieElement}
                                    />
                                );
                        })}
                    </div>
                    <div className="flex justify-center">
                        {isEnd ? (
                            <p className="text-black dark:text-amber-50 font-spotify text-xl">
                                {text(language, "all_results")}
                            </p>
                        ) : loading ? (
                            <Preloader language={language} />
                        ) : (
                            <button
                                className="border-2 font-spotify text-black hover:text-amber-50 hover:bg-gray-800 dark:text-amber-50 dark:hover:bg-white dark:hover:text-gray-800 p-3 rounded-2xl duration-300 ease-in-out"
                                onClick={() => handleSearch(title)}
                            >
                                {text(language, "more_results")}
                            </button>
                        )}
                    </div>
                </>
            ) : loading ? (
                <Preloader language={language} />
            ) : (
                <p className="text-black dark:text-amber-50 font-spotify text-4xl">
                    {text(language, "no_results")}
                </p>
            )}
        </div>
    );
}
