//4. Función que dadas dos matrices, devuelva la suma de ellas. 
//Tener cuidado acá, chequear que las dimensiones de las dos matrices a sumar sean las mismas. 
//Si no coinciden, imprimir un error y salir de la función.
let rl = require ("readline-sync");

let nroFilas = rl.questionInt("ingrese cuantas filas quiere en la matris 1: ");
let nroColumnas = rl.questionInt("ingrese el numero de columnas que quiere en la matris 1: ");
let nroFilas2 = rl.questionInt("ingrese cuantas filas quiere en la matris 2: ");
let nroColumnas2 = rl.questionInt("ingrese el numero de columnas que quiere en la matris 2: ");


indicador = new Array (nroFilas);
for(let i =0;i<nroFilas;i++){ 
indicador[i] = new Array (nroColumnas);
}
indicador2 = new Array(nroFilas2);
for(let i=0;i<nroFilas2;i++){
    indicador2[i]= new Array (nroColumnas2);
}

let filas,columnas,filas2,columnas2;

for(filas = 0; filas<nroFilas;filas++){
    for(columnas = 0; columnas<nroColumnas; columnas++){
        indicador[filas][columnas] = Math.floor(Math.random()*11);
    }
}
for(filas2=0;filas2<nroFilas2;filas2++){
    for(columnas2=0;columnas2<nroColumnas2;columnas2++){
        indicador2[filas2][columnas2] = Math.floor(Math.random()*11);
    }
}


matrisNueva (nroFilas,nroFilas2,nroColumnas,nroColumnas2);

function sumaMatrices(indicador,indicador2,x,y){
   let  r = new Array (x)
    for(let i=0;i<x;i++){
        r [i] = new Array (y)
          
    }
    console.log(indicador);
    console.log(indicador2);
    for(let i = 0;i<indicador.length && i<indicador2.length;i++){
        for (let j=0;j<indicador.length&&j<indicador2.length;j++){
        r[i][j]=indicador[i][j]+indicador2[i][j];
        }

    }
    console.log("la suma de las 2 matrices es: ",r)
}
//function calcularSuma (matrix,x,y,matrix2){
 //   let matrisSuma = new Array (x);
   // for(let p = 0;p<x;p++){
    //    matrisSuma[p]= new Array (y);
    //}
      //  for(let i = 0;i<x;i++){
        //    for(let j =0;j<y;j++){
          //      matrisSuma[i][j] = matrix[i][j] + matrix2[i][j];
            //}
        //}

    //return (matrisSuma);
//}


function matrisNueva (nroFilas,nroFilas2,nroColumnas,nroColumnas2){
    let resultado;
    if (nroFilas == nroFilas2 && nroColumnas == nroColumnas2){
       resultado=sumaMatrices(indicador,indicador2,nroFilas,nroColumnas);
    }else{
        console.log ("Las matrices son distintas.");
    }
}

