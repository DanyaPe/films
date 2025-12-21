import "../index.css";
import FilterButton from "./FilterButton";

export default function Filter(props) {
    const { handleFilter, filter, filtersValue, language } = props;

    return (
        <div className="flex flex-row justify-between min-w-200">
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
