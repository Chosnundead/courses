// Создайте HTTP-сервер, который реализует
// простое API для получения и сохранения
// данных. Необходимо реализовать эндпоинты
// для получения списка элементов, получения
// элемента по идентификатору, добавления
// нового элемента и обновления существующего
// элемента.

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.json());

app.get("/", (req, res) => {
    let data = fs.readFileSync(__dirname + "/db.json");
    res.send(data.toString());
});

app.get("/:id", (req, res) => {
    let data = fs.readFileSync(__dirname + "/db.json");
    let obj = JSON.parse(data.toString());
    res.send(obj[req.params.id]);
});

app.post("/", (req, res) => {
    let data = fs.readFileSync(__dirname + "/db.json");
    let obj = JSON.parse(data.toString());
    obj.push(req.body);
    fs.writeFileSync(__dirname + "/db.json", JSON.stringify(obj));
    res.sendStatus(200);
});

app.put("/:id", (req, res) => {
    let data = fs.readFileSync(__dirname + "/db.json");
    let obj = JSON.parse(data.toString());
    obj[req.params.id] = req.body;
    fs.writeFileSync(__dirname + "/db.json", JSON.stringify(obj));
    res.sendStatus(200);
});

app.listen(3000);
