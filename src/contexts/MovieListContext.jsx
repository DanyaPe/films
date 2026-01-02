import { createContext, useContext, useState } from "react";

const MovieListContext = createContext(undefined);

export function MovieListProvider() {
    const [movieList, setMovieList] = useState();

    return (
        <MovieListContext.Provider
            value={{ movieList, setMovieList }}
        ></MovieListContext.Provider>
    );
}

export function useMovieList() {
    const context = useContext(MovieListContext);

    if (context === undefined) {
        throw new Error(
            "useMovieList необходимо использовать внутри MovieListProvider"
        );
    }

    return context;
}
