let readlinesync = require ('readline-sync');
let posicionLlegada = readlinesync.questionInt('Ingrese el numero de llegada: ');
console.log(posicionLlegada);
switch (posicionLlegada){
    case 1:
        console.log('Medalla de oro');
        break;
    case 2:
        console.log('Medalla de plata');
        break;
    case 3:
        console.log('Medalla de bronce');
        break;
    default:
        console.log('Entrega una estampa de segui participando');
}   