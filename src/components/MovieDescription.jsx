import "../index.css";
import { useEffect, useState } from "react";
import { fetchPlot } from "../utils/API.js";
import text from "../internationalization/translations.js";
import { useLanguage } from "../contexts/language/LanguageContext.js";
import Preloader from "./Preloader.jsx";

export default function MovieDescription(props) {
    const {
        getPosition,
        id,
        animationDuration,
        plotRef,
        setShowBackDrop,
        setShowPlot,
        cardRef,
        centerTranslate,
    } = props;

    const { language } = useLanguage();

    const [plot, setPlot] = useState("");
    const [director, setDirector] = useState("");
    const [writer, setWriter] = useState("");
    const [actors, setActors] = useState("");

    useEffect(() => {
        if (!plotRef) return;

        const position = getPosition();

        plotRef.current.style.setProperty(
            "--animation-duration",
            `${animationDuration}ms`,
        );
        plotRef.current.style.setProperty(
            "--bt",
            `${window.innerWidth > 425 ? Math.round(position.y + window.scrollY) : Math.round(position.y + window.scrollY + position.height) -1 }px`,
        );
        plotRef.current.style.setProperty(
            "--bl",
            `${window.innerWidth > 425 ? Math.round(position.x + position.width + window.scrollX) - 1 : position.x}px`,
        );
        plotRef.current.style.setProperty("--bh", `${position.height}px`);
        plotRef.current.style.setProperty("--bw", `${position.width}px`);

        plotRef.current.classList.add("show");
    }, [animationDuration, getPosition, plotRef]);

    useEffect(() => {
        fetchPlot(id).then((data) => {
            setPlot(data.Plot);
            setActors(data.Actors);
            setDirector(data.Director);
            setWriter(data.Writer);
        });
    }, [id]);

    const handleTransitionEnd = (e) => {
        if (!plotRef) return;

        if (
            e.propertyName === "transform" &&
            !plotRef.current.classList.contains("show")
        ) {
            setShowBackDrop(false);
            centerTranslate(cardRef.current);
            setShowPlot(false);
        }
    };

    return (
        <div
            className="side-text-block transform-[scaleX(var(--block-scale))] origin-[0%_0%] max-[426px]:transform-[scaleY(var(--block-scale))] max-[426px]:origin-[100%_0%] flex flex-col justify-between gap-3 bg-lime-50 dark:bg-gray-800 text-black dark:text-amber-50"
            ref={plotRef}
            onTransitionEnd={handleTransitionEnd}
        >
            {plot ? (
                <>
                    <div className="flex flex-col overflow-auto">
                        <h4 className="text-center font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-sm">
                            {text(language, "plot")}
                        </h4>
                        <p className="2xl:text-2xl xl:text-xl md:text-lg text-xs">
                            {plot}
                        </p>
                    </div>
                    <div className="flex flex-row justify-between 2xl:border-b-3.5 xl:border-b-3.7 lg:border-b-3.8 border-b-3 2xl:mb-9.75 xl:mb-8.25 lg:mb-7 md:mb-6 mb-3.75 dark:border-gray-300 border-black">
                        <span className="flex flex-col text-center flex-1">
                            <h4 className="font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-sm">
                                {text(language, "director")}
                            </h4>
                            <p className="2xl:text-xl lg:text-md md:text-base text-xs">
                                {director}
                            </p>
                        </span>
                        <span className="flex flex-col text-center flex-1 border-l-2 border-r-2">
                            <h4 className="font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-sm">
                                {text(language, "writer")}
                            </h4>
                            <p className="2xl:text-xl lg:text-md md:text-base text-xs">
                                {writer}
                            </p>
                        </span>
                        <span className="flex flex-col text-center flex-1">
                            <h4 className="font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-sm">
                                {text(language, "actors")}
                            </h4>
                            <p className="2xl:text-xl lg:text-md md:text-base text-xs">
                                {actors}
                            </p>
                        </span>
                    </div>
                </>
            ) : (
                <Preloader />
            )}
        </div>
    );
}
