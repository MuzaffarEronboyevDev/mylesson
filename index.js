"use strict"

// const age = +prompt("How old are you?", ""); age > 25 ?
// console.log("Welcome") : console.log("fuck you"); const color = +prompt("what
// is color of the traffic light", "") switch (color) {     case "red":
// console.log("stop");         break;     case "green":
// console.log("gooo");         break;     case "Yellow":
// console.log("Wait");         break;     default:         console.log("traffic
// light i snot working");         break; }; let num = 1; while (num <= 100) {
// console.log(num);     num++; } do {     console.log(num);     num++; } while
// (num <= 100); for (let i = 1; i < 10; i++) {     if (i ===8) {         break;
// }7 } const greetimg = "hello world"; console.log(greetimg.indexOf("l"))
// console.log(greetimg.slice(6, 11)); console.log(greetimg.substring(6, 11));
// console.log(greetimg.substr(6, 2)); const num = 7.7;
// console.log(Math.round(num)); const borderWidth = "12.7px";
// console.log(parseInt(borderWidth)) const showDB = ()=> { }



let numberOfSeries;

function startApp() {
    numberOfSeries = +prompt("nechta kordiz?", "");

    while (numberOfSeries == "" || numberOfSeries == null || isNaN(numberOfSeries)) {
        numberOfSeries = +prompt("nechta kordiz?", "");
    };
};

const seriesDB = {
    count: numberOfSeries,
    series: {},
    Actors: {},
    Genres: [],
    private: false
};
let a, b;

function rememberMySeries() {
    for (let i = 0; i < 2; i++) {
        a = prompt("Oxirgi ko'rgan serialingiz?"),
        b = prompt('Nechi baxo berasiz?');
        seriesDB.series[a] = b
        while (a == "" || a == null || b == "" || b == null || b == isNaN(b) ) {
            a = prompt("Oxirgi ko'rgan serialingiz?"),
            b = prompt('Nechi baxo berasiz?')
        };
    };
};
  

function writeGanres(ganre) {
    for (let i = 0; i <= 2; i++) {
        ganre[i] = prompt(`Preffered ganres ${i + 1} ?`);

        while (ganre == "" || ganre == null ) {
            ganre[i] = prompt(`Preffered ganres ${i + 1} ?`);
        }
    };
};

function detectLevelSeries(sum) {
    if (sum < 5) {
        console.log("you watch less");
    } else if (sum >= 5 && seriesDB.count <= 10) {
        console.log("you are good watcher");
    } else {
        console.log("you are rock");
    };
};

function showDB(privacy) {
    if (!privacy) {
        console.log(seriesDB);
    };
};

startApp();
rememberMySeries();
writeGanres(seriesDB.Genres);
detectLevelSeries(seriesDB.count);
showDB(seriesDB.private);