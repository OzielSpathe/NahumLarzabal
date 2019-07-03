let readlinesync = require('readline-sync');
let numero1 = readlinesync.questionInt("ingrese el primer numero entero: ");
let numero2 = readlinesync.questionInt("ingrese el segundo numero entero: ");
let suma = 0;
if(numero1 > numero2){ // esto es para invertir la condicion y que el swap (intercambio) 
    let x=numero2;  // para que hacerlo es por las dudas que el n2 sea mas chico q n1
    numero2 = numero1;
    numero1=x;
}
for(numero1 = numero1;numero1 <= numero2;numero1++){
   suma = suma + numero1;
}
console.log("la suma entre los numros es = ", suma);