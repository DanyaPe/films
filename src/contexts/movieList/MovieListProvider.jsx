import { useState } from "react";
import { MovieListContext } from "./MovieListContext.js";

export function MovieListProvider({ children }) {
    const [movieList, setMovieList] = useState([]);

    return (
        <MovieListContext.Provider value={{ movieList, setMovieList }}>
            {children}
        </MovieListContext.Provider>
    );
}
