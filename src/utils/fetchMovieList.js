export default async function fetchMovieList(title) {
    let s, movieList;
    if (typeof title === "string") s = title.split(" ");
    else return null;

    try {
        movieList = await fetch(
            `http://www.omdbapi.com/?apikey=d45a732e&s=${s}&r=json&page=1&type=movie`
        ).then((data) => data.json());
    } catch (error) {
        console.log(`Ошибка выполнения запроса к OMDb - ${error}`);
        return null;
    }

    return movieList;
}
