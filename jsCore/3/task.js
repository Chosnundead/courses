// Функция принимает два целых числа и
// должна возвращать true, если первое число
// без остатка делится на второе.

function isDivideBy(a, b) {
    return a % b === 0;
}

console.log(isDivideBy(10, 2));
console.log(isDivideBy(10, 3));
