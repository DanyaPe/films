import "../index.css";
import SearchInput from "./SearchInput";
import Movies from "./Movies";
import Filter from "./Filter";
import HomePage from "./HomePage";

export default function Main(props) {
    const {
        handleSearch,
        handleFilter,
        language,
        isFirstRender,
        title,
        movieList,
        filter,
        filtersValue,
        loading,
        isEnd,
    } = props;

    return (
        <main className="bg-zinc-100 dark:bg-gray-800 flex flex-col grow items-center py-10">
            <SearchInput handleSearch={handleSearch} language={language} />
            {isFirstRender ? (
                <HomePage />
            ) : (
                <>
                    <Filter
                        handleFilter={handleFilter}
                        filter={filter}
                        filtersValue={filtersValue}
                        language={language}
                    />
                    <Movies
                        movieList={movieList}
                        filter={filter}
                        isEnd={isEnd}
                        title={title}
                        handleSearch={handleSearch}
                        loading={loading}
                        language={language}
                    />
                </>
            )}
        </main>
    );
}
