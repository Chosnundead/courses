//Получить все статус коды на weatherApi
const API_KEY = "fc110464f1b7def226299e61e4446b30";

// 2XX status codes
fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`,
    {
        method: "get",
    }
).then((response) => {
    console.log(`2XX status code: ${response.status}`);
});

//4XX status codes
fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Lovrghrogijrgoindon&appid=${API_KEY}`,
    {
        method: "get",
    }
).then((response) => {
    console.log(`4XX status code: ${response.status}`);
});

// function makeid(length) {
//     let result = "";
//     const characters = "/abcdefghijklmnopqrstuvwxyz0123456789";
//     const charactersLength = characters.length;
//     let counter = 0;
//     while (counter < length) {
//         result += characters.charAt(
//             Math.floor(Math.random() * charactersLength)
//         );
//         counter += 1;
//     }
//     return result;
// }

// //fetch until 5XX
// for (let i = 0; i < 1000; i++) {
//     let randomText = makeid(Math.floor(Math.random() * 66) + 1);
//     fetch(`https://api.openweathermap.org/${randomText}`, {
//         method: "get",
//     }).then((response) => {
//         console.log(`status code: ${response.status}`);
//         if (response.status != 404) {
//             console.log(randomText);
//         }
//     });
// }
