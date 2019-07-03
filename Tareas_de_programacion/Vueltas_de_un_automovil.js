let readlinesync = require ('readline-sync');
let primeraVuelta = readlinesync.questionFloat("Que tiempo marco en la Primera vuelta: ");
let segundaVuelta = readlinesync.questionFloat("Que tiempo marco en la Segunda vuelta: ");
let terceraVuelta = readlinesync.questionFloat("Que tiempo marco en la Tercera vuelta: ");
let cuartaVuelta = readlinesync.questionFloat("Que tiempo marco en la Cuarta vuelta: ");
let vueltaTotal = primeraVuelta + segundaVuelta + terceraVuelta + cuartaVuelta
let promedioVuelta = vueltaTotal / 4
console.log("El total de tiempo recorrido en las 4 vueltas:",vueltaTotal );
console.log("El promedio de las vueltas fueron de:", promedioVuelta);