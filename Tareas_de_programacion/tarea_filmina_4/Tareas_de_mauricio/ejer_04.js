let rl = require ('readline-sync');
let numero = rl.questionInt('ingrese un numero: ');
   
function numeroPar(numero1){
    for(i=numero1;i>=2;i--){
        if(i % 2 == 0){
            console.log(i);
        }
        }
    }
   
    numeroPar(numero);