function factorial(numero,resultado) {
    rl = require ('readline-sync');
    numero = rl.questionInt('numero ingresado: ');
    resultado = numero;
	for (i = 1; i < numero; i++) {
        resultado = resultado * i;
        console.log(resultado);

    }
}
let numero = " "
factorial(numero);