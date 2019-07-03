let rl = require ('readline-sync')
let c = "";
let numero = rl.questionInt('indique un numero: ');
for(let i= 1; i < 16; i++){
    if(numero % i == 0 ) c+=(numero+' '); 
    i
}
console.log(c);
console.log(numero);