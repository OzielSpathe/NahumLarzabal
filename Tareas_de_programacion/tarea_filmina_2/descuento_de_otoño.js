let readlineSync = require ('readline-sync');
let cantidadProductos = readlineSync.questionFloat('Indique la cantidad de productos: ');
let precioUnitario = readlineSync.questionFloat('Indique el precio unitario del producto: $');
let mesActual = readlineSync.question('Indique el mes actual con numero o MAYUSCULAS: ');
let sumaTotal = cantidadProductos * precioUnitario;
if (mesActual == 'OCTUBRE' || mesActual == 10){
    let descuento = sumaTotal - (sumaTotal * 0.15);
    console.log('La suma de todolo lo que lleva es de: $' , sumaTotal)
    console.log('Pero Usted tiene un descuento por el mes de Octubre del 15% por lo cual lo que tiene que abonar es: $' , descuento);
}else{
    console.log('El precio a abonar es de: $ ', sumaTotal);
}
console.log('Gracias por su compra.- Vuelva pronto');