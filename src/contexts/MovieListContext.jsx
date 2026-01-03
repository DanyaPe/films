import { createContext, useContext, useState } from "react";

const MovieListContext = createContext(undefined);

export function MovieListProvider({ children }) {
    const [movieList, setMovieList] = useState([]);

    return (
        <MovieListContext.Provider value={{ movieList, setMovieList }}>
            {children}
        </MovieListContext.Provider>
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
