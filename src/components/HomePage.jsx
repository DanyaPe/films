import "../index.css";
import { useTheme } from "../contexts/theme/ThemeContext.js";
import { useSearch } from "../contexts/search/SearchContext.js";

export default function HomePage() {
    const { isFirstRender } = useTheme();
    const { delay } = useSearch();

    return (
        <div className="w-screen overflow-hidden">
            <div className="home-pic">
                <img
                    src="./home_page_pic.jpg"
                    alt="Home Page Picture"
                    style={{ "--delay-before-search": `${delay}ms` }}
                    className={`w-auto h-187.5 sm:h-auto sm:w-screen shrink-0 ${isFirstRender ? "fade-in" : "fade-out"}`}
                />
                <img
                    src="./home_page_pic.jpg"
                    alt="Home Page Picture"
                    style={{ "--delay-before-search": `${delay}ms` }}
                    className={`w-auto h-187.5 sm:h-auto sm:w-screen shrink-0 ${isFirstRender ? "fade-in" : "fade-out"}`}
                />
            </div>
        </div>
    );
}
