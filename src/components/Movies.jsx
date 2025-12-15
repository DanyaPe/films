import "tailwindcss";
import Movie from "./Movie";

export default function Movies(props) {
    const { movieList } = props;

    return (
        <div className="flex flex-wrap justify-center px-20">
            {movieList.map((movieElement) => (
                <Movie key={movieElement.imdbID} {...movieElement} />
            ))}
        </div>
    );
}
