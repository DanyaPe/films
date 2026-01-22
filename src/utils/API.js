/**
 * API Запрос списка кино в сервисе OMDb
 * @param {string} title - Заголовок фильма\сериала
 * @param {string} type - Фильм\сериал
 * @param {string} page - Номер страницы поиска
 * @returns {Array<Object>}
 */
const fetchMovieList = async (title, type, page) => {
    const result = [];

    if (
        typeof title !== "string" ||
        typeof type !== "string" ||
        typeof page !== "string"
    ) {
        console.error(
            `В качестве параметра передан не соответствующий тип данных`,
        );
        return result;
    }

    const API_KEY = import.meta.env.VITE_API_KEY;
    title = title.split(" ").join("+");
    const endPoint = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}&type=${type}&page=${page}&r=json`;

    try {
        const response = await fetch(endPoint);

        if (!response.ok) {
            console.error(
                `Ошибка HTTP запроса:\n${endPoint} - ${response.status}`,
            );
        } else {
            const json = await response.json();
            json.Response === "True"
                ? result.push(...json.Search)
                : console.warn(
                      `Не удалось обработать ответ от сервиса OMDb:\n${endPoint} - ${json.Error}`,
                  );
        }
    } catch (error) {
        console.error(`Ошибка выполнения запроса к OMDb:\n${error}`);
    }

    return result;
};

/**
 * Формирование результирующего списка фильмов и сериалов по фильтру
 * @param {string} title - Заголовок фильма\сериала
 * @param {string} page - Номер страницы поиска
 * @param {string} filter - Фильтр (фильм\сериал\всё)
 * @returns {Array<Object>}
 */
const fetchResultList = async (title, page, filter) => {
    let result = [];

    if (
        typeof title !== "string" ||
        typeof page !== "string" ||
        typeof filter !== "string"
    ) {
        console.error(
            `В качестве параметра передан не соответствующий тип данных`,
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

/**
 * Получение данных о сюжете фильма по его идентификатору
 * @param {Sting} id - Идентификатор картины
 * @returns {Sting}
 */
const fetchPlot = async (id) => {
    let result = null;

    if (typeof id !== "string") {
        console.error(
            `В качестве параметра передан не соответствующий тип данных`,
        );
        return result;
    }

    const API_KEY = import.meta.env.VITE_API_KEY;
    const endPoint = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`;

    try {
        const response = await fetch(endPoint);

        if (!response.ok) {
            console.error(
                `Ошибка HTTP запроса:\n${endPoint} - ${response.status}`,
            );
        } else {
            const json = await response.json();
            json.Response === "True"
                ? (result = json)
                : console.warn(
                      `Не удалось обработать ответ от сервиса OMDb:\n${endPoint} - ${json.Error}`,
                  );
        }
    } catch (error) {
        console.error(`Ошибка выполнения запроса к OMDb:\n${error}`);
    }

    return result;
};

export { fetchResultList, fetchMovieList, fetchPlot };
