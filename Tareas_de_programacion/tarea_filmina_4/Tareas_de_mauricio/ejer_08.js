function factorial(numero) {
    rl = require ('readline-sync');
    numero = rl.questionInt('numero ingresado: ');
    resultado = numero;
        for (i = 1; i < numero; i++) {
            resultado = resultado * i;
        }
        console.log(resultado);    
    
}
let numero = " "
for(let i = 0; i<10;i++){
factorial(numero);
}