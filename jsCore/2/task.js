// Напишите цикл for и внутри объявите
// переменную с использованием var, let и
// const. Затем попытайтесь обратиться к этой
// переменной после завершения цикла. Какие
// переменные будут видны после завершения
// цикла, а какие нет?

for (var i = 0; i < 5; i++) {
    var x = i;
    let y = i;
    const z = i;
}

try {
    console.log(x);
} catch (e) {
    console.log(e);
}
try {
    console.log(y);
} catch (e) {
    console.log(e);
}
try {
    console.log(z);
} catch (e) {
    console.log(e);
}
