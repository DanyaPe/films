import "../index.css";
import text from "../internationalization/translations.js";

export default function FilterButton(props) {
    const { filterValue, handleFilter, filter, language } = props;

    return (
        <button
            name={filterValue}
            id={filterValue}
            aria-pressed={filter === filterValue ? "true" : "false"}
            className="font-spotify border-2 rounded-2xl text-black dark:text-amber-50 hover:text-amber-50 hover:bg-gray-800 dark:hover:bg-white dark:hover:text-gray-800 dark:aria-pressed:bg-white dark:aria-pressed:text-gray-800 ease-in-out duration-300 p-2 text-xs md:text-sm lg:text-base xl:text-xl"
            onClick={() => handleFilter(filterValue)}
        >
            {text(language, filterValue)}
        </button>
    );
}
