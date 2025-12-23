import "../index.css";
import text from "../internationalization/translations.js";

export default function Footer(props) {
    const { language } = props;

    return (
        <footer className="border-t bg-green-200 border-black dark:border-gray-200 dark:bg-gray-950 h-14 md:h-16 lg:h-20">
            <div className="text-center text-gray-500 text-xs md:text-sm lg:text-base">
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
