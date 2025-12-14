import "tailwindcss";
import SearchInput from "./SearchInput";

export default function Main() {
    return (
        <main className="bg-gray-800 flex flex-col grow items-center px-4 py-10">
            <SearchInput />
        </main>
    );
}
