import { createContext, useContext } from "react";

export const MovieListContext = createContext(undefined);

export function useMovieList() {
    const context = useContext(MovieListContext);

    if (context === undefined) {
        throw new Error(
            "useMovieList необходимо использовать внутри MovieListProvider"
        );
    }

    return context;
}
