//2)  Hacer la función prefijo que indica si una palabra es prefijo de otra palabra/texto. Por ejemplo:
 //prefijo("cul", "espectaculo") -> falso
// prefijo("cul", "culto") -> verdadero

let readlinesync = require ("readline-sync");
let palabra  = readlinesync.question("ingrese un texto: ");
let buscarPal = readlinesync.question("que palabra tiene q estar al principio: ");

function prefijo (palabra,buscarPal){
i=palabra.indexOf(buscarPal);


if(i==0){
    console.log(true);
}else{
    console.log(false);
}
}
prefijo (palabra,buscarPal);