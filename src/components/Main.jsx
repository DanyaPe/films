import "tailwindcss";
import SearchInput from "./SearchInput";
import Movies from "./Movies";

export default function Main(props) {
    const { movieList } = props;

    return (
        <main className="bg-gray-800 flex flex-col grow items-center px-4 py-10">
            <SearchInput />
            <Movies movieList={movieList} />
        </main>
    );
}
