/**
 * Пауза между асинхронными действиями
 * @param {Number} ms - Задержка в миллисекундах
 * @returns {Promise}
 */
export default function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
