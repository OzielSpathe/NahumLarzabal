let readlineSync = require('readline-sync');
let numeroDeseado1 = readlineSync.questionInt('Ingrese el primer numero ENTERO que desea comparar si es Mayor a:');
let numeroDeseado2 = readlineSync.questionInt('Ingrese el segundo numero ENTERO que desea comparar si es Mayor a:');
let numeroDeseado3 = readlineSync.questionInt('Ingrese el tercero numero ENTERO que desea comparar si es Mayor:');
if (numeroDeseado1 > numeroDeseado2 && numeroDeseado1 > numeroDeseado3){
       console.log('El numero mayor es: ' , numeroDeseado1);
    }else{
     if (numeroDeseado2 > numeroDeseado3 && numeroDeseado2 > numeroDeseado1){
         console.log ('El numero mayor es: ' , numeroDeseado2);
    }else{
        if (numeroDeseado3 > numeroDeseado1 && numeroDeseado3 > numeroDeseado2){
            console.log('El numero mayor es: ', numeroDeseado3);
        }
    }
}