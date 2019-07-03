let readlinesync = require('readline-sync');
let primerNumero = readlinesync.questionint("Ingrese el primer numero:");
console.log("el primer numeroes", primerNumero);
let segundoNumero = readlinesync.questionint("ingrese el segundo numero:");
console.log("el segundo numero", segundoNumero);
let resultado = primerNumero + segundoNumero
conosle.log("el resutlado de la suma es:" resultado);