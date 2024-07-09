// Напишите программный код, который
// просматривает определенную директорию и
// удаляет все файлы определенного
// расширения (например, .txt) с помощью
// функции unlink(). После удаления файлов
// выведите список оставшихся файлов в консоль.
const fs = require("fs");
const path = require("path");
const PATH_TO_FOLDER = __dirname + "/task";
const FILE_NAMES = [
    "file1.txt",
    "file2.txt",
    "file3.txt",
    "file1.bat",
    "file1.html",
    "file1.js",
];

for (let fileName of FILE_NAMES) {
    fs.writeFileSync(PATH_TO_FOLDER + "/" + fileName, "Hello World!");
}

const getAllFilesInDir = (dir) => {
    return fs
        .readdirSync(dir, { withFileTypes: true })
        .filter((dirent) => dirent.isFile())
        .map((dirent) => dirent.name);
};

let allFilesInDir = getAllFilesInDir(PATH_TO_FOLDER);
console.log(allFilesInDir);

for (let fileName of allFilesInDir) {
    if (!fileName.endsWith(".txt")) continue;
    fs.unlinkSync(PATH_TO_FOLDER + "/" + fileName);
}
console.log(getAllFilesInDir(PATH_TO_FOLDER));
