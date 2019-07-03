let readlinesync = require ("readline-sync");
let numero = 0;
while ( numero == 0){
    numero = readlinesync.questionInt("Ingrese un numero mayor a 0: ");
}
if ( numero % 2 == 0){
    console.log("El numero " + numero + " es par");
}else{
    console.log("El numero " + numero + " es impar");
}