import "../index.css";
import FilterButton from "./FilterButton";
import { useLanguage } from "../contexts/language/LanguageContext.js";
import FILTERS from "../constants/filters.js";
import text from "../internationalization/translations.js";

export default function Filter() {
    const { language } = useLanguage();

    return (
        <fieldset className="flex flex-row justify-center gap-x-5 mb-10">
            <legend className="sr-only">
                {text(language, "label_for_filter")}
            </legend>
            {FILTERS.map((filterValue) => (
                <FilterButton key={filterValue} id={filterValue} />
            ))}
        </fieldset>
    );
}
