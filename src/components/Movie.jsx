import "tailwindcss";

export default function Movie(props) {
    const { Title, Year, Poster } = props;

    return (
        <div className="w-80 h-130 m-10">
            <img
                src={
                    Poster == "N/A"
                        ? "https://placehold.jp/535365/ffffff/320x480.png?text=Movie%20don't%20have%20a%20poster"
                        : Poster
                }
                alt={Title}
                className="w-80 h-120 object-fill"
            />
            <p className="text-amber-50 line-clamp-2 h-12 font-spotify">
                {Title}
            </p>
            <p className="text-gray-300 font-spotify border-t-2">{Year}</p>
        </div>
    );
}
