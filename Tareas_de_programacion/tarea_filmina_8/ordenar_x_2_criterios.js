//• Dados un arreglo de texto y dos arreglos de enteros de tamaño n: 
//• nombres Como Texto • años Como Entero y altura Como Entero 
//• Ordénelos los tres vectores a la vez según los años, y en caso que haya un empate, 
//utilice la altura para desempatar • Tener en cuenta que los intercambios tienen que cambiar 
//los elementos de los tres vectores a la vez


let rl = require ("readline-sync");
let cantidad = rl.questionInt("Cuantos quiere cargar: ");
let año = new Array (cantidad);
let alturas = new Array (cantidad);
let nombres = new Array (cantidad);
let numNombre,i,j,posicion;
for(numNombre=0;numNombre<cantidad;numNombre++){
    nombre=rl.question((numNombre+1)+" Nombre y Apellido: ");
        edad= rl.questionInt((numNombre+1)+" Cuantos anios tiene: ");
        altura= rl.questionFloat((numNombre+1)+" Cual es la altura : ");
    i=0;
    while(i<numNombre&&año[i]>edad&&alturas[i]>altura){
        i++
    }
    for(j=numNombre;j>i;j--){
        nombres[j]=nombres[j-1];
        año[j]=año[j-1];
        alturas[j]=alturas[j-1];
    }
    nombres[i]=nombre;
    año[i]=edad;
    alturas[i]=altura;
}

for(posicion=0;posicion<cantidad;posicion++){
    console.log("Posicion" ,posicion, ":", nombres[posicion],"tiene",año[posicion],"años y mide",alturas[posicion]," metros.-");
}

