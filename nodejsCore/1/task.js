// Создайте программный код, который
// одновременно считывает данные из одного
// файла и записывает их в другой файл.
// Реализуйте эту программу сначала с
// использованием блокирующих операций
// чтения и записи, а затем перепишите ее,
// используя неблокирующие операции
// (fs.createReadStream и fs.createWriteStream).
// Сравните скорость выполнения обеих версий
// программы.

const fs = require("fs");
const staticFile = __dirname + "/staticFile.txt";
const dynamicFile = __dirname + "/dynamicFile.txt";
fs.writeFileSync(staticFile, "Hello World!");

let time = Date.now();
let text = fs.readFileSync(staticFile).toString();
fs.writeFileSync(dynamicFile, text);
console.log(`Time for sync: ${Date.now() - time}`);

time = Date.now();
let readStream = fs.createReadStream(staticFile);
let writeStream = fs.createWriteStream(dynamicFile);
readStream.pipe(writeStream);
console.log(`Time for sync(stream): ${Date.now() - time}`);

time = Date.now();
readStream = fs.createReadStream(staticFile);
writeStream = fs.createWriteStream(dynamicFile);
readStream.on("data", (chunk) => {
    writeStream.write(chunk);
});
readStream.on("end", () => {
    writeStream.end();
    console.log(`Time for async(stream): ${Date.now() - time}`);
});
