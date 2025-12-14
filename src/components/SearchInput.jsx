import "tailwindcss";

export default function SearchInput() {
    return (
        <div className="m-5 min-w-200 max-w-300 flex items-center border-b-2 border-gray-700">
            <svg
                className="m-2 h-7 w-7 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35m1.6-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            <input
                placeholder="Введите название фильма"
                className="focus:outline-none focus:shadow-sm text-2xl text-amber-50 font-spotify grow"
            />
        </div>
    );
}
