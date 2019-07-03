let compra=[];
let x=0;

function selecionarArt(id){
let articulo = document.getElementById("articulo");
let fideos = 35;
let galletitas = 15;
let asceite = 49;
let papel_higenico= 62;
let leche =51;
if(id=="fideos"){
    articulo.value = fideos;
    }else if(id=="galletitas"){
        articulo.value = galletitas;
    }else if(id=="asceite"){
        articulo.value=asceite;
    }else if (id=="papel_higenico"){
        articulo.value=papel_higenico;
    }else {
        articulo.value=leche;
    }
}

function agregar(){
    let articulo = document.getElementById("articulo");
    let cantidad = document.getElementById("cantidad");
    suma = articulo.value*cantidad.value;
  
    compra[x]=suma;
    x++;
    
    
    

}

function calcular(){
total=document.getElementById("total");
    x=0;
for (let i = 0; i < compra.length; i++) {
        x += compra[i];
    
}
return total.value=x;
    
}
