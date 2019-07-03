let readlineSync = require('readline-sync');
let sueldoAnterior = readlineSync.questionFloat('Ingrese el importe de su sueldo para saber el aumento que tendra: ');
if (sueldoAnterior >= 0 && sueldoAnterior <= 15000){
    let aumento1 = sueldoAnterior * 0.2 + sueldoAnterior;
    console.log('El aumento es del 20% por lo cual su sueldo actualizado es de: $ ' , aumento1);
}else{
    if (sueldoAnterior >= 15001 && sueldoAnterior <= 20000){
        let aumento2 = sueldoAnterior * 0.1 + sueldoAnterior;
        console.log('El aumento es del 10% por lo cual su sueldo actualizado es de: $ ', aumento2)
    }else{
        if (sueldoAnterior >= 20001 && sueldoAnterior <= 25000){
            let aumento3 = sueldoAnterior * 0.05 + sueldoAnterior;
            console.log('El aumento es del 5% por lo cual su sueldo actualizado es de: $ ', aumento3);
        }else{
            if (sueldoAnterior > 25000){
                let aumento4 = sueldoAnterior
                console.log('Su sueldo no tiene aumento por lo cual sigue cobrando lo mismo: $ ', aumento4);
            }
        }
    }
}
