import "../index.css";
import FilterButton from "./FilterButton";
import text from "../internationalization/translations.js";

export default function Filter(props) {
    const { handleFilter, filter, filtersValue, language } = props;

    return (
        <fieldset className="flex flex-row justify-between gap-x-5">
            <legend className="sr-only">
                {text(language, "label_for_filter")}
            </legend>
            {filtersValue.map((filterValue) => (
                <FilterButton
                    key={filterValue}
                    filterValue={filterValue}
                    handleFilter={handleFilter}
                    filter={filter}
                    language={language}
                />
            ))}
        </fieldset>
    );
}
