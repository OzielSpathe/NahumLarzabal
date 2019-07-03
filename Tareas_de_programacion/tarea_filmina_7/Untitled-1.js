let rl = require ("readline-sync");

let nroFilas = rl.questionInt("ingrese cuantas filas quiere en la matris 1: ");
let nroColumnas = rl.questionInt("ingrese el numero de columnas que quiere en la matris 1: ");
let nroFilas2 = rl.questionInt("ingrese cuantas filas quiere en la matris 2: ");
let nroColumnas2 = rl.questionInt("ingrese el numero de columnas que quiere en la matris 2: ");
let matriz1 = [],matriz2=[],matriz3=[];

crearMatriz(matriz1,nroFilas,nroColumnas)
cargarMatriz(matriz1);
crearMatriz(matriz2,nroFilas2,nroColumnas2)
cargarMatriz(matriz2);
console.log("la matriz 1 es: ",matriz1);
console.log("la matriz 2 es: ",matriz2);

matriz3=multiplicarMatriz(matriz1,matriz2);
console.log("la multiplicacion de las 2 matrices es:",matriz3);

function crearMatriz (matriz,nroFilas,nroColumnas){
    for(let i =0;i<nroFilas;i++){ 
    matriz[i] = new Array (nroColumnas);
    }
}
function cargarMatriz(matriz){
    for(let filas = 0; filas<matriz.length;filas++){
        for(let columnas = 0; columnas<matriz[filas].length; columnas++){
            matriz[filas][columnas] = Math.floor(Math.random()*11);
        }
    }
}

function multiplicarMatriz (matriz1,matriz2){
    if(matriz1[0].length == matriz2.length){
        let matriz3 = [];
        let x;
        crearMatriz(matriz3,matriz1.length,matriz2[0].length);
        for(let i = 0;i<matriz2.length ;i++){
            for (let j=0;j<matriz2[i].length;j++){
                x=0;
                for(let k=0;k<matriz2.length;k++){ //recorre el lugar que hay q modificar :D
                    x+=matriz1[i][k]*matriz2[k][j];

                }
                matriz3[i][j]=x;
            }
        }        
       return matriz3;
    }else{
        return null
    }
}
