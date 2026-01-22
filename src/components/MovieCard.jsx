import "../index.css";
import React, { useState, useEffect } from "react";
import Poster from "./Poster";

export default React.memo(function MovieCard(props) {
    const { Title, Year, Poster: url } = props;
    const [isVisible, setVisible] = useState(false);
    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <article
            className={`flex flex-col w-36 h-61 md:w-54 md:h-92 lg:w-58 lg:h-104 xl:w-72 xl:h-122 text-black dark:text-amber-50 border-fills ${
                isVisible ? "scale-up-tl" : ""
            }`}
        >
            <Poster poster={url} />
            <h3 className="text-black dark:text-amber-50 line-clamp-2 h-1/10 font-spotify content-end grow text-xs md:text-sm lg:text-lg">
                {Title}
            </h3>
            <p className="text-black dark:text-gray-300 font-spotify border-t-2 h-1/20 text-[10px] md:text-sm lg:text-base">
                {Year}
            </p>
        </article>
    );
});
