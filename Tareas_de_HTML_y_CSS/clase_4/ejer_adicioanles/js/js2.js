function generar() {
    let x = "";
    for (let i = 1; i <= 100; i++) {
        x += i + " ";
    }
    x += "<br><br>"
    return document.body.innerHTML += x;

}