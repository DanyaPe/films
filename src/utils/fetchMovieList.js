export default async function fetchMovieList(title, type) {
    let movieList;
    if (typeof title === "string") title = title.split(" ");
    else return null;

    if (typeof type !== "string") return null;

    try {
        movieList = await fetch(
            `http://www.omdbapi.com/?apikey=d45a732e&s=${title}&r=json&page=1${
                type === "all" ? `` : `&type=${type}`
            }`
        ).then((data) => data.json());
    } catch (error) {
        console.log(`Ошибка выполнения запроса к OMDb - ${error}`);
        return null;
    }

    return movieList;
}
