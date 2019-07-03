// Cree una página que tenga un text box, un label y un botón. Al hacer clic en el botón se deberá ejecutar una función javascript que,
// tomando lo ingresado en el text box, invierta las letras y lo imprima en la consola. Ejemplo:
//Text box: Hola Mundo! - console.log: !odnuM aloH

function rotar(){
    let x = document.getElementById("span");
    let ancho = document.getElementById("texto");
    for(let i=ancho.length;i>-1;i--){
        x=ancho
    }

    return ancho.length;
}

let x = []
    let ancho = "hola mundo";
    for(let i=0;i<ancho.length;i++){
        ancho = ancho-1;
    }
    for(let i=ancho.length-1;i>-1;i--){
        console.log(x[i])
    }
