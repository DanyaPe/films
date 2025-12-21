import "../index.css";
import text from "../internationalization/translations.js";

export default function FilterButton(props) {
    const { filterValue, handleFilter, filter, language } = props;

    return (
        <button
            name={filterValue}
            id={filterValue}
            aria-pressed={filter === filterValue ? "true" : "false"}
            className="p-2 border-2 rounded-2xl hover:bg-white hover:text-gray-800 min-h-10 min-w-30 ease-in-out duration-300 aria-pressed:bg-white aria-pressed:text-gray-800"
            onClick={() => handleFilter(filterValue)}
        >
            {text(language, filterValue)}
        </button>
    );
}
