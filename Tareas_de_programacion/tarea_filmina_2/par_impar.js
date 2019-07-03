let readlineSync = require('readline-sync');
let numeroDeseado = readlineSync.questionFloat('Ingrese el numero que desea saber si es par o impar: ');
if (numeroDeseado == 0){
    console.log('El numero es ' , numeroDeseado);
}else{
    if(numeroDeseado % 2 == 0){
        console.log('El numero ' , numeroDeseado,'es par' );        
    }else{
        if(numeroDeseado |= 1){
            console.log('El numero ', numeroDeseado,'es impar');
        }
    }
}
