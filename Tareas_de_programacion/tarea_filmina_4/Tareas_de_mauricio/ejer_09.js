function ingreseUnNumero(numero,contador,max,min){
let rl = require('readline-sync')
numero = rl.questionInt("Indique un numero : ");
contador = 2;
max = numero;
min = numero;
while(contador <= 5){    
    if(numero > max) max = numero;
    if(numero <= min) min = numero;
    contador++;
    numero = rl.questionInt("Indique un numero : ");
}
console.log ('El numero maximo es: '+max);
console.log('El numero minimo es: ' +min);
}

let numero = " ";
ingreseUnNumero(numero);