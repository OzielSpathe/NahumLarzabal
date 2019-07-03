let readlinesync = require ("readline-sync");
let pedirClave;
let clave = "eureka";
let contador = 1;
let suma = 0;
while ( contador <= 3 && pedirClave != clave){
    pedirClave=readlinesync.question("pedir: ");
    suma = suma + pedirClave;
    contador = contador +1;
}
if ( pedirClave == clave){
    console.log("Bienvenido Usuario");
}else{
    console.log("Has agotado los intentos permitidos, intetelo mas tarde. Gracias.");

}
