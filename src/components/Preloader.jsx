import "../index.css";
import { useLanguage } from "../contexts/language/LanguageContext.js";
import text from "../internationalization/translations.js";

export default function Preloader() {
    const { language } = useLanguage();

    return (
        <div className="inline-flex items-center rounded-md px-4 py-2 font-spotify dark:text-amber-50 text-black transition duration-150 ease-in-out m-10 text-sm lg:text-base xl:text-xl">
            <svg
                class="mr-3 -ml-1 size-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke={
                        document.documentElement.classList.contains("dark")
                            ? "currentColor"
                            : "black"
                    }
                    stroke-width="4"
                ></circle>
                <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
            </svg>
            {text(language, "loading")}
        </div>
    );
}
