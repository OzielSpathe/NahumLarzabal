function factorial(numero,resultado) {
    rl = require ('readline-sync');
    numero = rl.questionInt('numero ingresado: ');
    resultado = numero;
	for (i = numero -1; i >= 1; i--) {
        resultado = resultado * i;
    }
    console.log(resultado)
}
let numero = " "
factorial(numero);