const fetchMovieList = async (title, type, page) => {
    if (
        typeof title !== "string" ||
        typeof type !== "string" ||
        typeof page !== "string"
    )
        console.error(
            `В качестве параметра передан не соответствующий тип данных`
        );

    const API_KEY = import.meta.env.VITE_API_KEY;
    const endPoint = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}&type=${type}&page=${page}&r=json`;
    const result = [];
    title = title.split(" ");

    try {
        const response = await fetch(endPoint);

        if (!response.ok) {
            console.error(
                `Ошибка HTTP запроса:\n${endPoint} - ${response.status}`
            );
        } else {
            const json = await response.json();
            json.Response === "True"
                ? result.push(...json.Search)
                : console.warn(
                      `Не удалось обработать ответ от сервиса OMDb:\n${endPoint} - ${json.Error}`
                  );
        }
    } catch (error) {
        console.error(`Ошибка выполнения запроса к OMDb:\n${error}`);
    }

    return result;
};

const fetchResultList = async (title) => {
    let resultList = [];

    let fetchList = await fetchMovieList(title, "movie", "1");
    resultList = resultList.concat(fetchList);

    fetchList = await fetchMovieList(title, "series", "1");
    resultList = resultList.concat(fetchList);

    return resultList;
};

export { fetchResultList, fetchMovieList };
