//5) Escriba un algoritmo que genere un histograma horizontal de 10 valores 
//ingresados por teclado, luego de leer todos los valores.

let readlinesync = require ("readline-sync");
let num = readlinesync.questionInt ("¿Cuantos numeros desea ingresar? ");
let arr = new Array (num)

for(let i=0;i<num;i++){
    arr[i] = readlinesync.questionInt ("ingrese el numero: ");  
}


function combertir (x){
    c=""
    for (i=0;i<x;i++){
     c+="*";
     
    }
    console.log(c);
}
for(let i=0;i<num;i++){
    combertir(arr[i]);
}