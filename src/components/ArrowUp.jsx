import "../index.css";
import { useState, useEffect } from "react";

export default function ArrowUp() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(
                window.pageYOffset > (window.innerWidth >= 1440 ? 3000 : 900)
            );
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <button
            className={`size-10 md:size-13 xl:size-15 flex items-center justify-center fixed transform -right-15 bottom-15 md:bottom-17 xl:bottom-21 border-2 rounded-2xl bg-gray-800 dark:bg-white ease-in-out duration-300 transition-all ${
                visible ? "slide-left" : "slide-right"
            }`}
            onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
        >
            <svg
                className="size-8 md:size-11 xl:size-13 text-amber-50 dark:text-gray-800"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 5V19"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>
                <path
                    d="M18 11L12 5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>
                <path
                    d="M6 11L12 5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>
            </svg>
        </button>
    );
}
