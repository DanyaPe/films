import "../index.css";
import { useState } from "react";

export default function Poster({ poster }) {
    const [image, setImage] = useState(poster);

    return (
        <img
            src={image == "N/A" ? "./place_hold_pic.png" : image}
            alt="Poster"
            className="h-83/100 w-93/100 self-center overflow-hidden"
            onError={() => setImage("./place_hold_pic.png")}
        />
    );
}
