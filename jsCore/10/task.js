// Напишите функцию, принимающую
// параметр data. Функция всегда должна
// возвразать Promise. В случае, если параметр
// возвращает не число, верните Promise reject
// с ошибкой 'Error'. В случае, если параметр
// возвращает нечетное число, то верните
// Promise через одну секунду c результатом
// 'Odd'. Если параметр возвращает четное
// число, то верните Promise через две секунды
// c результатом 'Even'.

function processData(data) {
    return new Promise((resolve, reject) => {
        if (typeof data !== "number") {
            reject("Error");
        } else if (data % 2 !== 0) {
            setTimeout(() => {
                resolve("Odd");
            }, 1000);
        } else {
            setTimeout(() => {
                resolve("Even");
            }, 2000);
        }
    });
}

processData(5)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

processData(6)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

processData("error")
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
