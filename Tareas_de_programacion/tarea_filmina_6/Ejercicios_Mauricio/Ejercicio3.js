//Hacer la función esParte que indica si una palabra está contenida en la otra palabra/texto. Por ejemplo:
 //esParte("cul", "espectaculo") -> verdadero
 //esParte("cul", "culto") -> verdadero
 //esParte("cul", "algo que no") -> falso
 let readlinesync = require ("readline-sync");
let palabra  = readlinesync.question("ingrese una palabra: ");
let buscarPal = readlinesync.question("que palabra tiene quiere buscar: ");

function esParte (palabra, buscarPal){
let i=palabra.indexOf(buscarPal);

if (i!=-1){
    console.log(true);
}else console.log (false);
}

esParte (palabra, buscarPal);
