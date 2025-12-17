import "../index.css";

export default function Filter(props) {
    const { handleFilter, filter } = props;

    return (
        <div className="flex flex-row justify-between font-spotify text-amber-50 min-w-200 text-xl">
            <label>
                <input
                    type="radio"
                    name="all"
                    id="all"
                    onChange={() => handleFilter("all")}
                    checked={filter === "all"}
                />
                Всё
            </label>
            <label>
                <input
                    type="radio"
                    name="movie"
                    id="movie"
                    onChange={() => handleFilter("movie")}
                    checked={filter === "movie"}
                />
                Фильмы
            </label>
            <label>
                <input
                    type="radio"
                    name="series"
                    id="series"
                    onChange={() => handleFilter("series")}
                    checked={filter === "series"}
                />
                Сериалы
            </label>
            <label>
                <input
                    type="radio"
                    name="episode"
                    id="episode"
                    onChange={() => handleFilter("episode")}
                    checked={filter === "episode"}
                />
                Эпизоды
            </label>
        </div>
    );
}
