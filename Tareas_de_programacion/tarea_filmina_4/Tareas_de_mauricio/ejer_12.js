let rl = require ('readline-sync');
let precio = " ";
let total = " ";

function precioPapel(precio){
    precio = rl.questionFloat('ingrese un precio: ');
    for(i=0;i<401;i+=100){
        if (i == 100){
            total="el precio unitario es: "+precio+"\n";
        }
        if(i==200 ){
            precioUnitario = (precio- precio*0.12).toFixed(2);
            total = "entre "+ i+" y "+(i+100)+" = "+precioUnitario+i+"\n";
    
    }
    if(i==300 ){
        precioUnitario = (precio- precio*0.15).toFixed(2);
        total = "entre "+ i+" y "+(i+100)+" = "+precioUnitario+i+"\n";

}
if(i==400 ){
    precioUnitario = (precio- precio*0.18).toFixed(2);
    total = "entre "+ i+" y "+(i+100)+" = "+precioUnitario+i+"\n";

}


    console.log(total);

    }
}
precioPapel(precio);