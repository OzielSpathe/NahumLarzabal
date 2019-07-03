let contador = 0;
function sumar() {
    "use strict";
    let calcular = document.getElementById("calcular");
    if (calcular.value != "") {
        contador += parseInt(calcular.value);

    } else {
        contador++
    }
    let respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = contador;

}

function resta() {
    "use strict";
    let calcular = document.getElementById("calcular");
    if (calcular.value != "") {
        contador -= parseInt(calcular.value);

    } else {

    contador--
    }
    let respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = contador;
}


function dados() {
   let min = 1;
   let max = 6;
   let contador = 0;
   let x;
      
for (let i = 0; i < 1000; i++) {
    let dadoUno = Math.floor(Math.random() * (min && max));
    let dadoDos = Math.floor(Math.random() * (min && max));
    x = dadoUno + dadoDos;
        if (x == 7) contador++;
            
    }
    return document.getElementById("dado").innerHTML=contador;

}
