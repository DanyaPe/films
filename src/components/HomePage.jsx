import "../index.css";
import { useTheme } from "../contexts/theme/ThemeContext.js";
import { useSearch } from "../contexts/search/SearchContext.js";

export default function HomePage() {
    const { isFirstRender } = useTheme();
    const { delay } = useSearch();

    return (
        <img
            src="./home_page_pic.jpg"
            alt="Home Page Picture"
            style={{ "--delay-before-search": `${delay}ms` }}
            className={`${isFirstRender ? "fade-in" : "fade-out"}`}
        />
    );
}
