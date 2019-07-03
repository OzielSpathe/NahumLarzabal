let readlinesync = require('readline-sync');
let numero1 = readlinesync.questionInt("ingrese el primer numero entero: ");
let numero2 = readlinesync.questionInt("ingrese el segundo numero entero: ");
let suma = 0;
for(numero1 = numero1;numero1 <= numero2;numero1++){
   suma = suma + numero1;
}
console.log("la suma entre los numros es = ", suma);