import "tailwindcss";

export default function Movie(props) {
    const { title, year, poster } = props;

    return (
        <div className="w-80 h-130 m-10">
            <img src={poster} alt={title} className="w-80 h-120 object-fill" />
            <p className="text-amber-50 line-clamp-2 h-12 font-spotify">
                {title}
            </p>
            <p className="text-gray-300 font-spotify border-t-2">{year}</p>
        </div>
    );
}
