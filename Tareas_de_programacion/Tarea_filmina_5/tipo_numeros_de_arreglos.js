let readlineSync = require ('readline-sync');
let numDimension = readlineSync.questionInt("Ingrese la dimension: ");
let numIngresado;
let numArreglo = new Array (numDimension);
let contarPositivos = 0, contarNegativos = 0, contarCeros= 0;
for(let indice = 0; indice < numDimension;indice++){
    numIngresado = readlineSync.questionInt("Ingrese un numero: ");
    numArreglo[indice]=numIngresado;
    if(numArreglo[indice]>0){
        contarPositivos++
    }
    if (numArreglo[indice]<0){
        contarNegativos++
    }
    if(numArreglo[indice]==0){
        contarCeros++
    }
}
console.log(contarPositivos+" positivos, "+contarNegativos+" negativos y "+contarCeros+" ceros");
            
        
    

    

