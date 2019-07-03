let readlinesync = require ("readline-sync");

let dimencion = readlinesync.questionInt("Indique la dimencion del arreglo: ");
let numero1 = new Array (dimencion);
let numero2 = new Array (dimencion);

console.log("Carge el primer vector: ");
cargarNumero(numero1,dimencion);

console.log("Carge el segundo vector: ")
cargarNumero(numero2,dimencion);

sumarNumeros(numero1,numero2,dimencion);

function cargarNumero (v,dimencion){
    let indice;
    for (indice = 0; indice<dimencion;indice++){
        v[indice] = readlinesync.questionInt("Ingrese un numero: ");

    }
}



function sumarNumeros (n1,n2,dimencion){
    for(let indice = 0; indice<dimencion;indice++){
        multiplicacion = (n1[indice]*n2[indice]);
        subTotal = multiplicacion;
        total = multiplicacion + subTotal;
    }
    console.log( "La suma del producto escalar es:",total);
}

