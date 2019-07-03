//• Desarrollar un programa que permita ordenar un arreglo “a” de tamaño “n” sin modificarlo, 
//es decir, sin hacer los intercambios sobre la estructura “a” 
//• Utilizar un arreglo auxiliar “aux” cargado con los índices del arreglo “a” (de 0 a n) 
//• El ordenamiento tiene que hacerse mirando los valores de “a” pero haciendo los intercambios en “aux” 
//• Crear un método que permita imprimir ordenado que reciba como parámetros “a”, “aux” y “n”

let rl = require('readline-sync');
let n = rl.questionInt("cuantos arreglos quiere: ");
let a = new Array(n);
let aux;

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random()*10);
}

console.log(a);
aux = ordenarArrEnArrAux(a);


function ordenarArrEnArrAux(arr){
    let aux = arr;
       for (let i = 1; i < arr.length; i++){
        for (let j = 0; j < arr.length-i; j++){
            if (arr[j] > arr[j + 1]) { 
                x = arr[j + 1];
                aux[j + 1] = arr[j];
                aux[j] = x;
            }
        }
    }
    console.log(aux);
}
