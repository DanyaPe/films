import "../index.css";
import LanguageButton from "./LanguageButton";
import text from "../internationalization/translations.js";

export default function Header(props) {
    const { handleLanguage, language } = props;

    return (
        <header className="border-b border-gray-200 bg-gray-950">
            <div className="mx-auto px-4 py-4 flex items-center justify-between gap-x-15">
                <h1 className="text-6xl font-palui text-zinc-50">
                    {text(language, "header")}
                </h1>
                <LanguageButton
                    language={language}
                    handleLanguage={handleLanguage}
                />
            </div>
        </header>
    );
}
