import "../index.css";
import Movie from "./Movie";

export default function Movies(props) {
    const { movieList, filter } = props;

    return (
        <div className="flex flex-wrap justify-center px-20">
            {movieList.length ? (
                movieList.map((movieElement) => {
                    if (filter === "all" || filter === movieElement.Type)
                        return (
                            <Movie
                                key={movieElement.imdbID}
                                {...movieElement}
                            />
                        );
                })
            ) : (
                <p className="text-amber-50 font-spotify text-4xl">
                    Films are not found
                </p>
            )}
        </div>
    );
}
