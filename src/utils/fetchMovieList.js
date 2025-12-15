export default async function fetchMovieList(title) {
    let s;
    if (typeof title === "string") s = title.split(" ");
    else return null;

    const movieList = await fetch(
        `http://www.omdbapi.com/?apikey=d45a732e&s=${s}&r=json&page=1&type=movie`
    )
        .then((data) => data.json())
        .then((json) => json.Search);

    return movieList;
}
