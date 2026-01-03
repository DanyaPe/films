import "../index.css";
import { useFilter } from "../contexts/filter/FilterContext.js";
import { useLanguage } from "../contexts/language/LanguageContext.js";
import FILTERS from "../constants/filters.js";
import text from "../internationalization/translations.js";

export default function FilterButton({ id }) {
    const { filter, setFilter } = useFilter();
    const { language } = useLanguage();

    const handleFilter = () => {
        if (FILTERS.includes(id)) {
            setFilter(id);
        } else {
            console.error(`Фильтр "${id}" не существует`);
        }
    };

    return (
        <button
            name={id}
            id={id}
            aria-pressed={filter === id ? "true" : "false"}
            className="font-spotify border-2 rounded-2xl text-cyan-900 dark:text-amber-50 hover:text-amber-50 hover:bg-gray-800 dark:hover:bg-white dark:hover:text-gray-800 dark:aria-pressed:bg-white dark:aria-pressed:text-gray-800 ease-in-out duration-300 p-2 text-xs md:text-sm lg:text-base xl:text-xl"
            onClick={handleFilter}
        >
            {text(language, id)}
        </button>
    );
}
