import Movies from "./Movies";
import Filter from "./Filter";
import { useTheme } from "../contexts/theme/ThemeContext";
import { useSearch } from "../contexts/search/SearchContext";

export default function SearchPage() {
    const { isFirstRender } = useTheme();
    const { delay } = useSearch();

    return (
        <div
            style={{ "--delay-before-search": `${delay}ms` }}
            className={`${isFirstRender ? "fade-out" : "fade-in"}`}
        >
            <Filter />
            <Movies />
        </div>
    );
}
