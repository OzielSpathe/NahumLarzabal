let readlinesync = require ("readline-sync");
cantDeButacas = readlinesync.questionInt ("Ingrese la cantidad de butacas: ");
arr = new Array (cantDeButacas);

cargarButacas(cantDeButacas);
console.log(sumar());



function cargarButacas (cantDeButacas){   
    for ( let i = 0; i < cantDeButacas;i++){
        arr[i]= Azar (2);
        if(arr[i] == 0){
            arr[i]= false;
        }else{
            arr[i]= true
        }
        console.log("butaca: " +(i+1)+ " es: "+ arr[i]);  
    }
    
}   

function Azar(tope){
    return Math.floor(Math.random()*tope);
}

function sumar (){
    aux = 0;
    for ( let i = 0; i < cantDeButacas;i++){
        if(arr[i]==false){
            aux++;
        }
    }
   return aux
}

