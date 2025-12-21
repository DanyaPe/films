import "../index.css";
import text from "../internationalization/translations.js";

export default function LanguageButton(props) {
    const { handleLanguage, language } = props;

    return (
        <button
            name="lang"
            id="lang"
            className="font-spotify text-black hover:text-amber-50 hover:bg-gray-800 dark:text-amber-50 p-2 border-2 rounded-2xl dark:hover:bg-white dark:hover:text-gray-800 ease-in-out duration-300"
            onClick={handleLanguage}
        >
            {text(language, "language")}
        </button>
    );
}
