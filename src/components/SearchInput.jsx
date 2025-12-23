import "../index.css";
import React from "react";
import text from "../internationalization/translations.js";

export default class SearchInput extends React.Component {
    state = {
        text: "",
    };

    render() {
        const { handleSearch, language } = this.props;

        return (
            <form
                onSubmit={(event) => event.preventDefault()}
                className="relative p-2 flex items-center gap-x-2 w-[90vw] md:w-[50vw] mt-2 md:mt-5"
            >
                <img
                    src="./loupe.svg"
                    alt="Loupe"
                    className="size-5 md:size-6 xl:size-8"
                />
                <label htmlFor="search" className="sr-only">
                    {text(language, "label_for_search")}
                </label>
                <input
                    id="search"
                    name="search"
                    placeholder=" "
                    type="search"
                    className="peer focus:outline-none dark:text-amber-50 text-black font-spotify grow border-b-2 border-gray-700 w-3/5 text-sm md:text-lg lg:text-xl xl:text-2xl"
                    onChange={(event) =>
                        this.setState({ text: event.target.value })
                    }
                    onKeyDown={(event) => {
                        if (event.key === "Enter")
                            handleSearch(this.state.text);
                    }}
                />
                <span class="pointer-events-none absolute top-1/2 -translate-y-1/2 dark:text-gray-400 text-cyan-900 transition-all duration-300 peer-focus:top-0 peer-not-placeholder-shown:top-0 text-[8px] left-9 md:text-xs md:left-10 lg:text-sm xl:left-12 xl:text-base">
                    {text(language, "tip_for_search")}
                </span>
            </form>
        );
    }
}
