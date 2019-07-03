let readlinesync = require('readline-sync');
let alturaPermitida = 1.30;
let alturaPersona = readlinesync.questionFloat('Ingrese la altura de la persona que quiere pasar: ');
if (alturaPersona < alturaPermitida){
    console.log('La persona no pasa');
}else{
    console.log('la persona pasa');
}