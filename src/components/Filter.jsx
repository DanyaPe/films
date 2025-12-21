import "../index.css";
import FilterButton from "./FilterButton";

export default function Filter(props) {
    const { handleFilter, filter, filtersValue } = props;

    return (
        <div className="flex flex-row justify-between font-spotify text-amber-50 min-w-200 text-xl">
            {filtersValue.map((element) => (
                <FilterButton
                    key={element.id}
                    id={element.id}
                    value={element.value}
                    handleFilter={handleFilter}
                    filter={filter}
                />
            ))}
        </div>
    );
}
