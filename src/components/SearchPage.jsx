import Movies from "./Movies";
import Filter from "./Filter";
import { useTheme } from "../contexts/theme/ThemeContext";

export default function SearchPage() {
    const { isFirstRender } = useTheme();

    return (
        <div className={`${isFirstRender ? "fade-out" : "fade-in"}`}>
            <Filter />
            <Movies />
        </div>
    );
}
