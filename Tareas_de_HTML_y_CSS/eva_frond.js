
let x="";
let total=0;



function calcular(){
    let dato1 = document.getElementById("dato1").value;
    let dato2 = document.getElementById("dato2").value;
    let op = document.getElementById("operacion").value;
    
    
    
if(op=="+"){
    total =parseInt(dato1) + parseInt(dato2);
       
}else if(op=="-"){
    total=parseInt(dato1) - parseInt(dato2);
}else if(op=="/"){
    total=parseInt(dato1) / parseInt(dato2);
}else if(op=="*"){
    total=parseInt(dato1) * parseInt(dato2);
}else{
    alert ("Ingrese: + , - , / , *");
}
x = '<tr><td><div>'+dato1+'</div></td>'+'<td><div>'+op+'</div></td>'+'<td><div>'+dato2+'</div></td>'+'<td><div>=</div></td>'+'<td><div>'+total+'</div></td></tr> <br>';
document.getElementById("resultado").innerHTML += x;
}


