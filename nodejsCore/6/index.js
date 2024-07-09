// Напишите программный код, который читает
// содержимое одного файла с помощью потока
// чтения (ReadableStream) и записывает его в
// другой файл с использованием потока записи
// (WritableStream).

// stream
// Node.js включает встроенный модуль stream, который позволяет нам работать с потоковыми данными и создавать высокопроизводительные приложения.

// Основные типы потоков внутри Node.js:

// Readable: потоки, из которых можно считывать данные (например, fs.createReadStream());
// Writable: потоки, в которые могут быть записаны данные (например, fs.createWriteStream());
// Duplex: потоки, которые являются одновременно Readable и Writable (например, net.Socket);
// Transform: потоки преобразования (Duplex).
// Чтобы передать данные из одного потока в другой, самый простой способ вызвать над потоками метод pipe:

// Readable.pipe(Writable);
// Readable.pipe(Transform).pipe(Writable);
// Duplex.pipe(Transform).pipe(Duplex);
// Метод pipe возвращает экземпляр потока, который был передан в него, что и позволяет потоки объединять между собой.

const fs = require("fs");
const input = __dirname + "/input.txt";
const output = __dirname + "/output.txt";

fs.createReadStream(input).pipe(fs.createWriteStream(output));
