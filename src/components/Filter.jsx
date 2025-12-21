import "../index.css";
import FilterButton from "./FilterButton";

export default function Filter(props) {
    const { handleFilter, filter, filtersValue, language } = props;

    return (
        <div className="flex flex-row justify-between font-spotify text-amber-50 min-w-200 text-xl">
            {filtersValue.map((filterValue) => (
                <FilterButton
                    key={filterValue}
                    filterValue={filterValue}
                    handleFilter={handleFilter}
                    filter={filter}
                    language={language}
                />
            ))}
        </div>
    );
}
