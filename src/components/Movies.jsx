import "tailwindcss";
import Movie from "./Movie";

export default function Movies(props) {
    const { movieList } = props;

    return (
        <div>
            {movieList.map((movieElement) => {
                <Movie />;
            })}
        </div>
    );
}
