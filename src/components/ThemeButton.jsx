import "../index.css";

export default function ThemeButton(props) {
    const { darkMode, handleMode } = props;
    return (
        <button
            name="mode"
            id="mode"
            className="p-2 border-2 rounded-2xl dark:border-amber-50 border-black dark:hover:bg-white hover:bg-gray-800"
            onClick={handleMode}
        >
            {darkMode ? "☀️" : "🌙"}
        </button>
    );
}
