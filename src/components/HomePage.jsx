import "../index.css";
import { useTheme } from "../contexts/theme/ThemeContext.js";

export default function HomePage() {
    const { isFirstRender } = useTheme();

    return (
        <img
            src="./home_page_pic.jpg"
            alt="Home Page Picture"
            className={`${isFirstRender ? "fade-in" : "fade-out"}`}
        />
    );
}
