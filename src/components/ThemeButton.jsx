import "../index.css";

export default function ThemeButton(props) {
    const { darkMode, handleMode } = props;
    return (
        <button
            name="mode"
            id="mode"
            className="border-2 rounded-xl dark:border-amber-50 border-cyan-900 dark:hover:bg-white hover:bg-gray-800 text-center align-middle w-8 h-8 text-sm lg:text-base lg:w-10 lg:h-10 xl:w-12 xl:h-12 xl:text-xl"
            onClick={handleMode}
        >
            {darkMode ? "☀️" : "🌙"}
        </button>
    );
}
