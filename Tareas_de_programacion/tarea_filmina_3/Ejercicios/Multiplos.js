let c = "";
for(let numero= 1; numero < 101; numero++){
    if(numero % 2 == 0 || numero % 3 == 0) c+=(numero+' '); // la variable c+= es lo mismo que c = c +
}                                                           //es para q imprima como texto console.log
console.log(c);