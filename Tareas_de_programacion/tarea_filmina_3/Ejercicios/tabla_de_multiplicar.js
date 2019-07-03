let readlinesync = require('readline-sync');
let numero1 = 1;
let numero2 = readlinesync.questionInt("ingrese el numero: ");
let numero3 = readlinesync.questionInt("Ingrese hasta donde quiere multiplicar: ")
let resultado;
while(numero1 <= numero3){
    resultado = numero1 * numero2;

     console.log(numero2 + " X " + numero1 + " = " + resultado);

     numero1 = numero1 +1

}
