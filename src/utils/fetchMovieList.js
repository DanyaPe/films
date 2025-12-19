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
        return result;
    }

    const API_KEY = import.meta.env.VITE_API_KEY;
    title = title.split(" ").join("+");
    const endPoint = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}&type=${type}&page=${page}&r=json`;

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

const fetchResultList = async (title, page, filter) => {
    let result = [];

    if (
        typeof title !== "string" ||
        typeof page !== "string" ||
        typeof filter !== "string"
    ) {
        console.error(
            `В качестве параметра передан не соответствующий тип данных`
        );
        return result;
    }

    if (filter === "movie" || filter === "all") {
        let fetchList = await fetchMovieList(title, "movie", page);
        result = result.concat(fetchList);
    }
    if (filter === "series" || filter === "all") {
        let fetchList = await fetchMovieList(title, "series", page);
        result = result.concat(fetchList);
    }

    return result;
};

export { fetchResultList, fetchMovieList };
