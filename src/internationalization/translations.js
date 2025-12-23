const translations = {
    ru: {
        header: "Каталог фильмов",
        language: "Eng",
        label_for_search: "Поиск по названию фильма",
        tip_for_search: "Введите название фильма и нажмите Enter",
        label_for_filter: "Фильтр по типу картины",
        all: "Все",
        movie: "Фильмы",
        series: "Сериалы",
        more_results: "Загрузить еще",
        all_results: "Загружены все найденные результаты",
        no_results: "Нет результатов",
        loading: "Загрузка...",
        protection_of_rights: "MovieCatalog. Все права защищены.",
        special_thanks_start: "Особая благодарность",
        special_thanks_end: "за предоставленный сервис.",
    },
    eng: {
        header: "Movie Catalog",
        language: "Рус",
        label_for_search: "Search by movie title",
        tip_for_search: "Enter the title of the movie and press Enter",
        label_for_filter: "Filter by movie type",
        all: "All",
        movie: "Films",
        series: "Series",
        more_results: "More",
        all_results: "All found results have been loaded",
        no_results: "No results",
        loading: "Loading...",
        protection_of_rights: "MovieCatalog. All rights protected.",
        special_thanks_start: "Special thanks to",
        special_thanks_end: "for providing the service",
    },
};

/**
 * Текст по ключу из словаря в соответствии с указанным языком
 * @param {string} lang
 * @param {string} key
 * @returns {string}
 */
const text = (lang, key) => {
    let result = "";

    if (typeof lang !== "string" || typeof key !== "string") {
        return result;
    }

    if (Object.keys(translations).includes(lang)) {
        if (Object.keys(translations[lang]).includes(key)) {
            return translations[lang][key];
        } else {
            console.error(`В словаре указанного языка нет ключа - ${key}`);
        }
    } else {
        console.error(`Указанного языка нет в словаре - ${lang}`);
    }

    return result;
};

export default text;
