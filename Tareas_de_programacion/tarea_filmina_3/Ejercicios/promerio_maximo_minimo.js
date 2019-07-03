let readlinesync = require ("readline-sync");
let numero = readlinesync.questionInt("Indique un numero : ");
let contador = 0;
let max = numero;
let min = numero;
let suma = 0;
while(numero != 0){    
    if(numero > max) max = numero;
    if(numero < min) min = numero;
    suma+=numero;
    contador++;
    numero = readlinesync.questionInt("Indique un numero : ");
}
if(suma > 0){
console.log("el numero Maximo es: "+ max);
console.log("el numero Minimo es: "+ min);
console.log("la media es", suma/contador);
}