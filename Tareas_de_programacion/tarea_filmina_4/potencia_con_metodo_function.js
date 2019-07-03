let rl = require ('readline-sync');
let base = rl.question('ingrese la base: ');
let exponente = rl.question('ingrese exponente: ');
potencia1(base,exponente);



function potencia1(base, exponente){
if(exponente<0){
    console.log('No se permite esa operacion matematica');
}else{
    console.log('El resultado es= ',base**exponente);
}
}
