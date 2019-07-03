let readlinesync = require ("readline-sync");
v1 = new Array (dimencion);
v2 = new Array (dimencion);
v3 = new Array (dimencion);
v4 = new Array (dimencion);

function cargaVector (v){
    for (let i =0;i<3;i++){
    v[i] = readlinesync.questionInt ("ingrese un numero: ");
    }
}

function multiplicarArreglo(v1,v2,v3,v4){
    aux = 0;
    for (let i=0;i<3;i++){
        aux = v1[i]*v2[i]*v3[i]*v4[i];
        console.log("La multiplicacion del posicion "+(i+1)+ " es: "+aux);

    }
}
console.log("cargar el vector 1: ")
cargaVector(v1);
console.log("cargar el vector 2: ")
cargaVector(v2);
console.log("cargar el vector 3: ")
cargaVector(v3);
console.log("cargar el vector 4: ")
cargaVector(v4);
multiplicarArreglo(v1,v2,v3,v4);