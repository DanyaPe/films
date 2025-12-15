import "tailwindcss";
import SearchInput from "./SearchInput";
import Movies from "./Movies";
import Preloader from "./Preloader";

export default function Main(props) {
    const { movieList, loading } = props;

    return (
        <main className="bg-gray-800 flex flex-col grow items-center py-10">
            <SearchInput />
            {loading ? <Preloader /> : <Movies movieList={movieList} />}
        </main>
    );
}
