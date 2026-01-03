import "../index.css";
import { useLanguage } from "../contexts/language/LanguageContext.js";
import text from "../internationalization/translations.js";

export default function LanguageButton() {
    const { language, setLanguage } = useLanguage();

    const handleLanguage = () => {
        language === "ru" ? setLanguage("eng") : setLanguage("ru");
    };

    return (
        <button
            name="lang"
            id="lang"
            className="font-spotify text-cyan-900 hover:text-amber-50 hover:bg-gray-800 dark:text-amber-50 border-2 rounded-xl dark:hover:bg-white dark:hover:text-gray-800 ease-in-out duration-300 p-1 text-sm lg:text-base xl:text-xl"
            onClick={handleLanguage}
        >
            {text(language, "language")}
        </button>
    );
}
