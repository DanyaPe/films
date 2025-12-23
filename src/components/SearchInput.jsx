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
            <div className="relative p-2 min-w-[20vw] max-w-[80vw] flex items-center gap-x-2 md:w-[50vw] mt-2 md:mt-5">
                <img
                    src="/loupe.svg"
                    alt="Loupe"
                    className="size-5 md:size-6 xl:size-8"
                />
                <input
                    name="search"
                    placeholder=" "
                    type="text"
                    className="peer focus:outline-none dark:text-amber-50 text-black font-spotify grow border-b-2 border-gray-700 w-3/5 text-sm md:text-lg lg:text-xl xl:text-2xl"
                    onChange={(event) =>
                        this.setState({ text: event.target.value })
                    }
                    onKeyDown={(event) => {
                        if (event.key === "Enter")
                            handleSearch(this.state.text);
                    }}
                />
                <label
                    for="search"
                    class="pointer-events-none absolute top-1/2 -translate-y-1/2 text-cyan-900 transition-all duration-300 peer-focus:top-0 peer-not-placeholder-shown:top-0 text-[8px] left-9 md:text-xs md:left-10 lg:text-sm xl:left-12 xl:text-base"
                >
                    {text(language, "tip_for_search")}
                </label>
            </div>
        );
    }
}
