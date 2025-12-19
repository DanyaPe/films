import "../index.css";
import Poster from "./Poster";

export default function Movie(props) {
    const { Title, Year, Poster: url } = props;

    return (
        <div className="w-80 h-130 m-10">
            <Poster poster={url} />
            <p className="text-amber-50 line-clamp-2 h-12 font-spotify">
                {Title}
            </p>
            <p className="text-gray-300 font-spotify border-t-2">{Year}</p>
        </div>
    );
}
