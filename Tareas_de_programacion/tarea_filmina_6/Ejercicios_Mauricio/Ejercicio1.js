//Hacer la función sufijo que indica si una palabra es sufijo de otra palabra/texto. Por ejemplo:
//sufijo("ola", "Hola mundo") -> falso
//sufijo("ola", "que hermosa ola") -> verdadero
//sufijo("ola","que hermosa ola para surfear") -> falso
let readlinesync = require ("readline-sync");
let palabra  = readlinesync.question("ingrese un texto: ");
let buscarPal = readlinesync.question("que palabra tiene q estar al final: ");

function sufijo ( palabra,buscarPal){
i=palabra.lastIndexOf(buscarPal);
i2=palabra.length;
i3 = buscarPal.length;

if(i==i2-i3){
    console.log(true);
}else{
    console.log(false);
}
}
sufijo(palabra,buscarPal);


