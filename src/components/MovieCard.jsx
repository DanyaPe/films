import "../index.css";
import React, { useState, useEffect, useRef } from "react";
import Poster from "./Poster";
import MovieDescription from "./MovieDescription.jsx";
import Backdrop from "./Backdrop.jsx";

export default React.memo(function MovieCard(props) {
    const { imdbID, Title, Year, Poster: url } = props;
    const [showBackDrop, setShowBackDrop] = useState(false);
    const [showPlot, setShowPlot] = useState(false);
    const cardRef = useRef(null);
    const backDropRef = useRef(null);
    const plotRef = useRef(null);
    const animationDuration = 500;

    useEffect(() => {
        if (!cardRef.current) return;

        cardRef.current.style.setProperty(
            "--animation-duration",
            `${animationDuration}ms`,
        );
        cardRef.current.classList.add("visible");
    }, [animationDuration]);

    const centerTranslate = (node) => {
        if (!node) return;

        if (!node.classList.contains("centering")) {
            const rect = node.getBoundingClientRect();

            node.style.setProperty(
                "--center-translate-y",
                `${window.innerHeight / 2 - (rect.y + rect.height / 2)}px`,
            );
            node.style.setProperty(
                "--center-translate-x",
                `${window.innerWidth / 2 - (rect.x + rect.width * 1.28)}px`,
            );
            node.classList.add("centering", "bg-lime-50", "dark:bg-gray-800");
        } else {
            node.classList.remove(
                "centering",
                "bg-lime-50",
                "dark:bg-gray-800",
            );
        }
    };

    const open = () => {
        if (!cardRef) return;

        if (!showBackDrop) {
            centerTranslate(cardRef.current);
            setShowBackDrop(true);
        }
    };

    const getPosition = () => {
        if (!cardRef) return;
        return cardRef.current.getBoundingClientRect();
    };

    const handleTransitionEnd = (e) => {
        if (e.propertyName === "transform" && showBackDrop) {
            setShowPlot(true);
        }
    };

    return (
        <>
            {showBackDrop && (
                <Backdrop
                    animationDuration={animationDuration}
                    backDropRef={backDropRef}
                    plotRef={plotRef}
                    cardRef={cardRef}
                    showPlot={showPlot}
                    setShowPlot={setShowPlot}
                    setShowBackDrop={setShowBackDrop}
                    centerTranslate={centerTranslate}
                />
            )}
            <article
                className="border-fills movie-card flex flex-col w-36 h-61 md:w-54 md:h-92 lg:w-58 lg:h-104 xl:w-72 xl:h-122 text-black dark:text-amber-50"
                onClick={open}
                ref={cardRef}
                onTransitionEnd={handleTransitionEnd}
            >
                <Poster poster={url} />
                <h3 className="line-clamp-2 h-1/10 font-spotify content-end grow text-xs md:text-sm lg:text-lg">
                    {Title}
                </h3>
                <p className="dark:text-gray-300 font-spotify border-t-2 h-1/20 text-[10px] md:text-sm lg:text-base">
                    {Year}
                </p>
            </article>
            {showPlot && (
                <MovieDescription
                    getPosition={getPosition}
                    id={imdbID}
                    animationDuration={animationDuration}
                    plotRef={plotRef}
                    setShowBackDrop={setShowBackDrop}
                    setShowPlot={setShowPlot}
                    cardRef={cardRef}
                    centerTranslate={centerTranslate}
                />
            )}
        </>
    );
});
