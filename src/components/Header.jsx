import "../index.css";
import { useLanguage } from "../contexts/language/LanguageContext.js";
import LanguageButton from "./LanguageButton";
import ThemeButton from "./ThemeButton.jsx";
import text from "../internationalization/translations.js";

export default function Header() {
    const { language } = useLanguage();
    return (
        <header className="border-b dark:border-zinc-200 dark:bg-gray-950 bg-green-200 border-black flex items-center justify-between gap-x-5 p-2 h-14 md:h-16 lg:h-20">
            <h1 className="font-palui dark:text-zinc-50 text-cyan-900 text-lg md:text-3xl lg:text-4xl xl:text-6xl">
                {text(language, "header")}
            </h1>
            <div className="flex justify-between gap-x-5">
                <LanguageButton />
                <ThemeButton />
            </div>
        </header>
    );
}
