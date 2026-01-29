import "../index.css";
import { useEffect, useState } from "react";
import { fetchPlot } from "../utils/API.js";
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

    const [text, setText] = useState("");
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
            `${position.y + window.scrollY}px`,
        );
        plotRef.current.style.setProperty(
            "--bl",
            `${position.x + position.width + window.scrollX}px`,
        );
        plotRef.current.style.setProperty("--bh", `${position.height}px`);
        plotRef.current.style.setProperty("--bw", `${position.width}px`);

        plotRef.current.classList.add("show");
    }, [animationDuration, getPosition, plotRef]);

    useEffect(() => {
        fetchPlot(id).then((data) => {
            setText(data.Plot);
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
            className="side-text-block flex flex-col justify-between gap-3 bg-lime-50 dark:bg-gray-800 text-black dark:text-amber-50"
            ref={plotRef}
            onTransitionEnd={handleTransitionEnd}
        >
            {text ? (
                <>
                    <div className="flex flex-col">
                        <h4 className="text-center font-bold">Plot</h4>
                        <p className="text-xl">{text}</p>
                    </div>
                    <div className="flex flex-row gap-3 justify-between border-b-3 mb-[33px] border-gray-300">
                        <span className="flex flex-col text-center flex-1">
                            <h4 className="font-bold">Director</h4>
                            <p>{director}</p>
                        </span>
                        <span className="flex flex-col text-center flex-1 border-l-2 border-r-2">
                            <h4 className="font-bold">Writer</h4>
                            <p>{writer}</p>
                        </span>
                        <span className="flex flex-col text-center flex-1">
                            <h4 className="font-bold">Actors</h4>
                            <p>{actors}</p>
                        </span>
                    </div>
                </>
            ) : (
                <Preloader />
            )}
        </div>
    );
}
