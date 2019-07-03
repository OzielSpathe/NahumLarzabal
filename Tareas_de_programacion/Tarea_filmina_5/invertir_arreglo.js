let readlineSync = require ('readline-sync');
let numDimension = readlineSync.questionInt("Ingrese la dimension: ");
let numIngresado = " ";
let numArreglo = new Array (numDimension);
for(let indice = 0; indice < numDimension;indice++){
    numIngresado = readlineSync.questionInt("Ingrese un numero: ");
    numArreglo[indice]=numIngresado;
}
for(indice = numDimension -1 ; indice >-1;indice--){
    console.log(numArreglo[indice]);
}

