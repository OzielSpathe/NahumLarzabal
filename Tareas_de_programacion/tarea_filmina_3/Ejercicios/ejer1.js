let rl = require('readline-sync');
let intento = 0;
let maxIntentos = 3;
let claveCorrecta="eureka";
let claveLeida="";
while(claveLeida!=claveCorrecta && intento<maxIntentos){
    claveLeida=rl.question("Ingrese la clave: ");
    intento++;
}
if(claveLeida!=claveCorrecta && intento == maxIntentos) console.log ("Se agotaron los intentos");
