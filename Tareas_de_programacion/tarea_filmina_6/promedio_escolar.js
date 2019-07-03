let readlinesync = require ("readline-sync");
let nombre = " ";
let notas = 0;
function cargarAlumno (nombre){
    nombre = readlinesync.question (" Nombre y Apellido: ");
   
    while (nombre != ""){
        cargarNota(notas);
        nombre = readlinesync.question (" Nombre y Apellido: ");
       
    }
}

function cargarNota (notas){
    let cantidad = 1;
    let aux = 0;
    while(cantidad<4){
        notas = readlinesync.questionInt ("Ingrese la nota del trimestre " +cantidad+ " : ");
        aux = aux +notas;
        cantidad++
    }
    console.log("El promedio de los trimestres es: "+ (aux/3).toFixed(2));
}

cargarAlumno(nombre,notas);

