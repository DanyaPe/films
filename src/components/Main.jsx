import "../index.css";
import { SearchProvider } from "../contexts/search/SearchProvider";
import { MovieListProvider } from "../contexts/movieList/MovieListProvider";
import { FilterProvider } from "../contexts/filter/FilterProvider";
import { useTheme } from "../contexts/theme/ThemeContext.js";
import SearchInput from "./SearchInput";
import Movies from "./Movies";
import Filter from "./Filter";

export default function Main() {
    const { isFirstRender } = useTheme();

    return (
        <FilterProvider>
            <MovieListProvider>
                <SearchProvider>
                    <main className="bg-lime-50 dark:bg-gray-800 flex flex-col items-center py-2 gap-y-5 grow">
                        <SearchInput />
                        {isFirstRender ? (
                            <img
                                src="./home_page_pic.jpg"
                                alt="Home Page Picture"
                            />
                        ) : (
                            <>
                                <Filter />
                                <Movies />
                            </>
                        )}
                    </main>
                </SearchProvider>
            </MovieListProvider>
        </FilterProvider>
    );
}
