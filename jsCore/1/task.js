// Напишите функцию, которая принимает
// строку и возвращает массив слов, из которых
// она состоит. Используйте строгий режим.

"use strict";

function getWords(str) {
    return str.split(" ");
}

console.log(getWords("Hello world"));
