import "../index.css";

export default function FilterButton(props) {
    const { id, value, handleFilter, filter } = props;

    return (
        <button
            name={id}
            id={id}
            aria-pressed={filter === id ? "true" : "false"}
            className="p-2 border-2 rounded-2xl hover:bg-white hover:text-gray-800 min-h-10 min-w-30 ease-in-out duration-300 aria-pressed:bg-white aria-pressed:text-gray-800"
            onClick={() => handleFilter(id)}
        >
            {value}
        </button>
    );
}
