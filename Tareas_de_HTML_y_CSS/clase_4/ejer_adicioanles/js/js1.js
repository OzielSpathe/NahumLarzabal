function evaluar(){
    let numOne = document.getElementById("numOne");
    let numTwo = document.getElementById("numTwo");

if(numOne.value < 0 && numTwo.value > 0 || numTwo.value < 0 && numOne.value >0){
alert("Un numero es negativo, cambiaelo por favor");
}

}