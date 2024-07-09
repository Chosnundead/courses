// Создайте программный код, который
// принимает путь к файлу в качестве аргумента
// командной строки. Используйте Path.dirname
// для получения имени директории, в которой
// находится файл, и Path.extname для получения
// расширения файла. Выведите имя директории
// и расширение файла в консоль.

// node <script_name> <file_path>
// node nodejsCore/4/index.js D:/Downloads/gameinfo.gi
const fs = require("fs");
const path = require("path");

if (process.argv.length < 3) {
    console.error("Please provide a file path as an argument");
    process.exit(1);
}

const PATH_TO_FILE = process.argv[2];

if (typeof PATH_TO_FILE !== "string") {
    console.error("The provided file path must be a string");
    process.exit(1);
}

console.log(path.dirname(PATH_TO_FILE));
console.log(path.extname(PATH_TO_FILE));
