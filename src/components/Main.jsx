import "../index.css";
import SearchInput from "./SearchInput";
import Movies from "./Movies";
import Filter from "./Filter";

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
        <main className="bg-lime-50 dark:bg-gray-800 flex flex-col items-center py-2 gap-y-5 grow">
            <SearchInput handleSearch={handleSearch} language={language} />
            {isFirstRender ? (
                <img src="./home_page_pic.jpg" alt="Home Page Picture" />
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
