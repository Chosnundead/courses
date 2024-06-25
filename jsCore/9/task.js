// Создайте функцию fetchAndProcessData,
// которая загружает данные с сервера с
// помощью async/await. Если запрос
// завершается успешно, функция должна
// вернуть данные. Если происходит ошибка,
// функция должна обработать её и вернуть
// сообщение об ошибке

async function fetchAndProcessData(url) {
    return await fetch(url)
        .then((response) => {
            return response.status;
        })
        .catch((error) => {
            return error;
        });
}

fetchAndProcessData("https://google.com").then((data) => console.log(data));
fetchAndProcessData("https://googlefregferg.cegrergergm").then((data) =>
    console.log(data)
);
