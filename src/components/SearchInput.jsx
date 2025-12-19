import "../index.css";
import React from "react";

export default class SearchInput extends React.Component {
    state = {
        text: "",
    };

    render() {
        const { handleSearch } = this.props;

        return (
            <div className="relative m-5 min-w-200 max-w-300 flex items-center border-b-2 border-gray-700">
                <img src="/loupe.svg" alt="Loupe" className="size-7 m-3" />
                <input
                    name="search"
                    placeholder=" "
                    className="peer focus:outline-none text-2xl text-amber-50 font-spotify grow"
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
                    class="pointer-events-none absolute left-15 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs"
                >
                    Введите название фильма и нажмите Enter
                </label>
            </div>
        );
    }
}
