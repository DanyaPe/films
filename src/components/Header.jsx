import "../index.css";
import LanguageButton from "./LanguageButton";
import ThemeButton from "./ThemeButton.jsx";
import text from "../internationalization/translations.js";

export default function Header(props) {
    const { handleLanguage, language, handleMode, darkMode } = props;

    return (
        <header className="border-b dark:border-zinc-200 dark:bg-gray-950 bg-zinc-50 border-black px-4 py-4 flex items-center justify-between gap-x-15">
            <h1 className="text-6xl font-palui dark:text-zinc-50 text-black">
                {text(language, "header")}
            </h1>
            <div className="flex justify-between gap-x-5">
                <LanguageButton
                    language={language}
                    handleLanguage={handleLanguage}
                />
                <ThemeButton darkMode={darkMode} handleMode={handleMode} />
            </div>
        </header>
    );
}
