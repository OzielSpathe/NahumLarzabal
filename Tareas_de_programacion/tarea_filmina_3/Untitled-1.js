let readlineSync = require('readline-sync');
let nota, promedio, contador;
let suma = 0;
for (contador = 1;contador <= 10; contador++){
    nota = readlineSync.questionInt('Ingrese la nota: ');
    suma = suma + nota;
}
promedio = suma/10;
console.log('El promedio de las notas es: ', promedio);