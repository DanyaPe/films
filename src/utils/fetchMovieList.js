const fetchMovieList = async (title, type, page) => {
    const result = [];

    if (
        typeof title !== "string" ||
        typeof type !== "string" ||
        typeof page !== "string"
    ) {
        console.error(
            `В качестве параметра передан не соответствующий тип данных`
        );
    }

    title = title.split(" ");

    try {
        const response = await fetch(
            `http://www.omdbapi.com/?apikey=d45a732e&s=${title}&type=${type}&page=${page}&r=json`
        ).then((data) => data.json());

        if (response && response.Response === "True") {
            response.Search.forEach((element) => {
                result.push(element);
            });
        } else {
            console.warn(
                `Не удалось обработать ответ от OMDb:\n ${response.Error}`
            );
        }
    } catch (error) {
        console.error(`Ошибка выполнения запроса к OMDb:\n ${error}`);
    }

    return result;
};

const fetchResultList = async (title) => {
    let resultList = [];

    let fetchList = await fetchMovieList(title, "movie", "1");
    resultList = resultList.concat(fetchList);

    fetchList = await fetchMovieList(title, "series", "1");
    resultList = resultList.concat(fetchList);

    fetchList = await fetchMovieList(title, "episode", "1");
    resultList = resultList.concat(fetchList);

    return resultList;
};

export { fetchResultList, fetchMovieList };
