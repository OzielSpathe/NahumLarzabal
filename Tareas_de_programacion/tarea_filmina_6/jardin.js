let readlinesync = require ("readline-sync");

let aulaAzul = 40
let aulaVerde = 35
let aulaAmarillo = 30

let perCurso = readlinesync.questionInt("ingrese la cantidad de alumnos: ");
if(perCurso <= aulaAmarillo){
    console.log("Amarillo");
}else{
    if(perCurso>aulaAmarillo && perCurso<=aulaVerde){
        console.log("Verde");
    }else{
        if(perCurso>aulaVerde && perCurso<=aulaAzul){
            console.log("Azul");
        }else{
            console.log("el numero ingresado es mayor a 40 no tenemos aulas tan grandes.")
        }
    }
}
