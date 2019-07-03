function cambiar() {
    let div = document.getElementById("random");
    
    div.style.width = Math.random()*100 +"%";
    div.style.height = Math.random()*700+"px";
    div.style.position = "absolute";
    div.style.backgroundColor = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
    div.style.bottom =Math.random()*100 +"%";
    div.style.right= Math.random()*100 +"%";
    div.style.zIndex="-1";
   

}