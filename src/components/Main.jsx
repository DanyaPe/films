import "../index.css";
import SearchInput from "./SearchInput";
import Movies from "./Movies";
import Filter from "./Filter";
import Preloader from "./Preloader";

export default function Main(props) {
    const { handleSearch, handleFilter, movieList, loading, filter } = props;

    return (
        <main className="bg-gray-800 flex flex-col grow items-center py-10">
            <SearchInput handleSearch={handleSearch} />
            <Filter handleFilter={handleFilter} filter={filter} />
            {loading ? (
                <Preloader />
            ) : (
                <Movies movieList={movieList} filter={filter} />
            )}
        </main>
    );
}
