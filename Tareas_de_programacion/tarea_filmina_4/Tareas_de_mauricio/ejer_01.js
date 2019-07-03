function esMultiplo(a,b){
    return ((a%b) == 0);
}
function minNumero(numero1,numero2){
    if(numero1<numero2){
        return numero1
    }else{
        return numero2
    }
}

let rl = require ('readline-sync');
let numero1 = rl.questionInt('ingrese el primer numero: ');
let numero2 = rl.questionInt('ingrese el numero divisor: ');
let maxDivisor=1;
let min=minNumero(numero1,numero2);
for(let i=1; i <= min; i++){
    if (esMultiplo(numero1,i) && esMultiplo(numero2,i)){
maxDivisor= i;
    }
}
console.log("el maximo Divisor es: ",maxDivisor);