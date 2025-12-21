import "../index.css";
import Movie from "./Movie";

export default function Movies(props) {
    const { movieList, filter, isEnd, title, handleSearch } = props;

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
                            <p className="text-amber-50 font-spotify text-xl">
                                Загружены все найденные результаты
                            </p>
                        ) : (
                            <button
                                className="border-2 font-spotify text-amber-50 hover:bg-white hover:text-gray-800 p-3 rounded-2xl duration-300 ease-in-out"
                                onClick={() => handleSearch(title)}
                            >
                                Загрузить еще
                            </button>
                        )}
                    </div>
                </>
            ) : (
                <p className="text-amber-50 font-spotify text-4xl">
                    Нет результатов
                </p>
            )}
        </div>
    );
}
