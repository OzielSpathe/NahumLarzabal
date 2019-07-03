// Hacer mayor o igual o menor a 50
let readlinesync = require ('readline-sync');
let numeroDeseado = readlinesync.questionInt('Verificar si el numero es mayor, menor o igual a 50:');
if (numeroDeseado > 50){
    console.log('El numero es mayor a 50: ' + numeroDeseado);
}else{
    console.log('El numero es menor o igual a 50: ' + numeroDeseado);
}