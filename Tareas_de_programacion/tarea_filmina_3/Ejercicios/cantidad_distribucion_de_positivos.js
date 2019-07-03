let readlinesync = require ("readline-sync");
let numero = readlinesync.questionFloat("Indique un numero : ");
let suma = 0;
let cantidad = 0;
while(numero != 0){    
   if(numero > 0) suma =suma +1 // solo compara esa line y contea esa linea 
    cantidad = cantidad + 1
    numero = readlinesync.questionFloat("Indique un numero : ");
  }
if(cantidad>0){
  console.log(suma, "positivos totales, " + suma*100/cantidad + "% del total");
}
