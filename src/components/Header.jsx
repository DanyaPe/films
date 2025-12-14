import "tailwindcss";

export default function Header() {
    return (
        <header className="border-b border-gray-200 bg-gray-950">
            <div className="mx-auto px-4 py-4 flex items-center justify-between gap-x-15">
                <h1 className="text-6xl font-palui text-zinc-50">
                    Movie Catalog
                </h1>
            </div>
        </header>
    );
}
