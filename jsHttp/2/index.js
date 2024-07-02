const API_KEY = "fc110464f1b7def226299e61e4446b30";
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
// Если у Вас ранее
// был опыт написания сервера с помощью Express/NestJS, то Вам необходимо
// написать свой сервер и используя API получить все статусы ответов.
app.use(bodyParser.json());
//test
app.get("/key", (req, res) => {
    res.status(100).send(`${API_KEY}`);
});
app.get("/", (req, res) => {
    if (req.body.API_KEY) {
        try {
            API_KEY = req.body.API_KEY;
        } catch (e) {
            res.sendStatus(500);
            return;
        }
    }
    res.sendStatus(200);
});
app.get("/redirect", (req, res) => {
    res.redirect("https://www.google.com");
});
app.use("/", (req, res) => {
    res.sendStatus(404);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
