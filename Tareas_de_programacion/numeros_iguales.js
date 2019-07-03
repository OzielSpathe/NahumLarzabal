// determinar verdadero o falso entre 2 numero si son iguales o no.
let readlinesync = require('readline-sync');
let numero1 = readlinesync.questionInt('que numero desea comparar:');
let numero2 = readlinesync.questionInt('comparar el numero:');
let resultado = numero1 == numero2;
if (resultado){
    console.log('son iguales');
}else{
    console.log('no es igual');
}