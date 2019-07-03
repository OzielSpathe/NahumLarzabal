let rl = require ('readline-sync');
let numero1 = rl.question('ingrese el primer numero: ');
let numero2 = rl.question('ingrese parametro de multiplo: ');
esMultiplo(numero1,numero2);




function esMultiplo(a,b){
return ((a%b) == 0);
}


