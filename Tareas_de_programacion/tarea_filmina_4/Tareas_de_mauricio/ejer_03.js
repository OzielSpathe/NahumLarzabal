function primo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
        return false;
        }
    }
    return numero;
  }
let numero = 999 ;
let c= " ";
for(let i=2 ; i<=numero; i++){
    if(primo(i)){
        c+= " "+ i
    }
}
console.log(c);
