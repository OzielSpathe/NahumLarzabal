readlinesync = require('readline-sync');
let notaPractica;
let notaProblemas;
let notaTeorica;
let datosAlumno;
let notaTotal = 100;
let contador = 0;
let suma = 0;
let resultado = notaPractica+notaProblemas+notaTeorica;
datosAlumno = readlinesync.question("Ingrese el Nombre y Apellido del alumno: ");
notaPractica = readlinesync.questionInt("Indique la nota Practica entre 0 y 10: ");
notaProblemas = readlinesync.questionInt("Indique la nota Problemas entre 0 y 10: ");
notaTeorica = readlinesync.questionInt("Indique la nota Teorica entre 0 y 10:");
while(notaPractica >= 0 && notaPractica < 10){
    notaPractica = readlinesync.questionInt("Indique la nota Practica entre 0 y 10: ");
        if(notaProblemas >= 0 && notaProblemas < 10){
        notaProblemas = readlinesync.questionInt("Indique la nota Problemas entre 0 y 10: ");
        }else{
            if(notaProblemas >= 0 && notaProblemas < 10){
                notaProblemas = readlinesync.questionInt("Indique la nota Problemas entre 0 y 10: ");
            }else{
                if(notaTeorica >= 0 && notaTeorica < 10){
                    notaTeorica = readlinesync.questionInt("Indique la nota Teorica entre 0 y 10:");
                }
            }
        }
        datosAlumno = readlinesync.question("Ingrese el Nombre y Apellido del siguiente alumno:");
    }
