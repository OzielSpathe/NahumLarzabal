//4. Función que dadas dos matrices, devuelva la suma de ellas. 
//Tener cuidado acá, chequear que las dimensiones de las dos matrices a sumar sean las mismas. 
//Si no coinciden, imprimir un error y salir de la función.
let rl = require ("readline-sync");

let nroFilas = rl.questionInt("ingrese cuantas filas quiere en la matris 1: ");
let nroColumnas = rl.questionInt("ingrese el numero de columnas que quiere en la matris 1: ");
let nroFilas2 = rl.questionInt("ingrese cuantas filas quiere en la matris 2: ");
let nroColumnas2 = rl.questionInt("ingrese el numero de columnas que quiere en la matris 2: ");
let matriz1 = [],matriz2=[],matriz3=[];
function comparar(nroColumnas,nroColumnas2){
    (nroColumnas==nroColumnas2);
}

crearMatriz(matriz1,nroFilas,nroColumnas)
cargarMatriz(matriz1);
crearMatriz(matriz2,nroFilas2,nroColumnas2)
cargarMatriz(matriz2);

matriz3=sumaMatrices(matriz1,matriz2);
console.log ("la suma de las 2 matrices es:",matriz3);


function crearMatriz (matriz,nroFilas,nroColumnas){
    for(let i =0;i<nroFilas;i++){ 
    matriz[i] = new Array (nroColumnas);
    }
}
function cargarMatriz(matriz){
    for(let filas = 0; filas<matriz.length;filas++){
        for(let columnas = 0; columnas<matriz.length; columnas++){
            matriz[filas][columnas] = Math.floor(Math.random()*11);
        }
    }
}


function sumaMatrices(matriz1,matriz2){
    
    if (matriz1.length == matriz2.length&&comparar(nroColumnas,nroColumnas2)){
        console.log("la matriz 1 es: ",matriz1);
        console.log("la matriz2 es: ",matriz2);
        let matriz3 = [];
        crearMatriz(matriz3,nroFilas,nroColumnas)   
    
        for(let i = 0;i<matriz1.length && i<matriz2.length;i++){
            for (let j=0;j<matriz1.length&&j<matriz2.length;j++){
            matriz3[i][j]=matriz1[i][j]+matriz2[i][j];
            } 
        }
         
        return  matriz3;
   }else{
   return null;
   }
 }

 
