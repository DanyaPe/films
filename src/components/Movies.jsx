import "tailwindcss";
import Movie from "./Movie";

export default function Movies(props) {
    const { movieList } = props;

    return (
        <div className="flex flex-wrap justify-center px-20">
            {movieList.length ? (
                movieList.map((movieElement) => (
                    <Movie key={movieElement.imdbID} {...movieElement} />
                ))
            ) : (
                <p className="text-amber-50 font-spotify text-4xl">
                    Films are not found
                </p>
            )}
        </div>
    );
}
