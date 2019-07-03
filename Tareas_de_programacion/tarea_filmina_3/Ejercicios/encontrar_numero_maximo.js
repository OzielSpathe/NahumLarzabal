let readlinesync = require ("readline-sync");
let numero1 = readlinesync.questionInt("Indique un numero : ");
let max = numero1;
while(numero1 != 0){
  numero1 = readlinesync.questionInt("Indique un numero : ");
  if(numero1 > max){
    max = numero1;
  }
}
console.log("el numero maximos es: " +max)
