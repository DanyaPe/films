import { useEffect } from "react";

export default function Backdrop(props) {
    const {
        animationDuration,
        backDropRef,
        plotRef,
        cardRef,
        showPlot,
        setShowPlot,
        setShowBackDrop,
        centerTranslate,
    } = props;

    useEffect(() => {
        if (!backDropRef) return;

        backDropRef.current.style.setProperty(
            "--animation-duration",
            `${animationDuration}ms`,
        );

        backDropRef.current.classList.add("show");
    }, [animationDuration, backDropRef]);

    const close = () => {
        if (!cardRef.current) return;

        if (showPlot && plotRef.current) {
            plotRef.current.classList.remove("show");
        } else {
            setShowPlot(false);
            centerTranslate(cardRef.current);
            setShowBackDrop(false);
        }
    };

    return <div ref={backDropRef} className="backdrop" onClick={close} />;
}
