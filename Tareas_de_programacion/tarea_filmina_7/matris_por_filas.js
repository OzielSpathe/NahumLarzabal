//• let un algoritmo que permita ordenar las filas de una matriz de nxm en orden descendente 
//según la suma de todas sus elementos (es decir, todas las columnas) 
//• Tener en cuenta que la comparación se hace entre filas (y no entre elementos puntuales de la matriz) 
//• Considerar que el intercambio tiene que mover filas enteras (en vez de un solo número)

let rl = require ("readline-sync");

let nroFilas = rl.questionInt("cuantos filas quiere: ");
let nroColumnas = rl.questionInt("cuantas columnas quiere: ");
let filas,columnas;

let matris = new Array (nroFilas);
for(let i = 0;i<nroFilas;i++){
    matris[i]= new Array (nroColumnas);

}
for(filas = 0; filas<nroFilas;filas++){
    for(columnas = 0; columnas<nroColumnas; columnas++){
        matris[filas][columnas] = Math.floor(Math.random()*11);
    }
}


console.log(matris);