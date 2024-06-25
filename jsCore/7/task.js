// Напишите функцию, которая использует блок
// try-catch для перехвата и обработки ошибки
// «ReferenceError» при доступе к
// неопределенной переменной.

function task() {
    try {
        console.log(x);
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log(e);
        }
    }
}

task();
