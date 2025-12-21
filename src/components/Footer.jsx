import "../index.css";
import text from "../internationalization/translations.js";

export default function Footer(props) {
    const { language } = props;

    return (
        <footer className="border-t border-gray-200 bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-500">
                <p>
                    © {new Date().getFullYear()}{" "}
                    {text(language, "protection_of_rights")}
                </p>
                <p>
                    {text(language, "special_thanks_start")}
                    <a href="https://www.omdbapi.com/"> OMDb API </a>
                    {text(language, "special_thanks_end")}
                </p>
            </div>
        </footer>
    );
}
