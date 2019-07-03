//1. Cargar una matriz con las dimensiones por teclado, después imprimirla por pantalla.
//2. Función que dada una matriz, devuelva el promedio de los elementos de dicha matriz.
//3. Función que dada una matriz y un valor, devuelva cuántos elementos de dicha matriz 
//son mayores al valor

let rl = require ("readline-sync");

let nroFilas = rl.questionInt("ingrese cuantas filas quiere: ");
let nroColumnas = rl.questionInt("ingrese el numero de columnas que quiere: ");
let mayor = rl.questionInt ("mayor a que numero desea contar: ");

indicador = new Array (nroFilas);
for(let i =0;i<nroFilas;i++){ //aca no se rompe cuando cargas mas de 2 entede? no sigas el ej de filmina se rompe
indicador[i] = new Array (nroColumnas);
}

let filas,columnas;

for(filas = 0; filas<nroFilas;filas++){
    for(columnas = 0; columnas<nroColumnas; columnas++){
        indicador[filas][columnas] = Math.floor(Math.random()*11);
    }
}

console.log(indicador);
sumarParametro(indicador,mayor,nroFilas,nroColumnas);

console.log("el promedio de la suma es: "+promedio(indicador,nroFilas,nroColumnas));



function promedio (matrix,filas,columnas){
    let suma = 0;
    let cantidad = 0;
    for(let i = 0; i<filas;i++){
        for(let j = 0; j<columnas; j++){
            cantidad++
            suma+= matrix[i][j];
        }
        
    }
    return (suma / cantidad).toFixed(2);
    
}
function sumarParametro (indicador,mayor,filas,columnas){
    let contador = 0;
    let suma;
    for(let i = 0; i<filas;i++){
        for(let j = 0;j<columnas;j++){
        if (indicador[i][j]>mayor){
              contador++
            }
            
        }
    }
console.log("hay "+contador+" numero mas grandes que "+mayor+" en esta matris.");
}
