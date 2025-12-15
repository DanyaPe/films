import "../index.css";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-500">
                <p>
                    © {new Date().getFullYear()} MovieCatalog. Все права
                    защищены.
                </p>
                <p>
                    Особая благодарность{" "}
                    <a href="https://www.omdbapi.com/">OMDb API</a> за
                    предоставленный сервис
                </p>
            </div>
        </footer>
    );
}
