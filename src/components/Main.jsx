import "../index.css";
import SearchInput from "./SearchInput";
import Movies from "./Movies";
import Filter from "./Filter";
import Preloader from "./Preloader";
import HomePage from "./HomePage";

export default function Main(props) {
    const {
        handleSearch,
        handleFilter,
        movieList,
        loading,
        filter,
        isFirstRender,
    } = props;

    return (
        <main className="bg-gray-800 flex flex-col grow items-center py-10">
            <SearchInput handleSearch={handleSearch} />
            {isFirstRender ? (
                <HomePage />
            ) : loading ? (
                <Preloader />
            ) : (
                <>
                    <Filter handleFilter={handleFilter} filter={filter} />
                    <Movies movieList={movieList} filter={filter} />
                </>
            )}
        </main>
    );
}
