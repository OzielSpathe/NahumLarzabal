//4)  Hacer una función que determine si una palabra es palíndromo (capicúa). Por ejemplo:
 //esPalindromo("anilina") -> verdadero
 //esPalindromo("roma") -> falso
 //esPalindromo("dabale arroz a la zorra el abad") -> verdadero   
 //recordar que las letras mayúsculas no son iguales a las minúsculas.

 let readlinesync = require ("readline-sync");

 let palabra = readlinesync.question("ingrese una palabra para saber si es Palindromo: ");
 esPalindromo (palabra);
 

function esPalindromo (palabra){
    indIzq = 0;
 indDer = palabra.length-1;
while ( indIzq < indDer){
 
    if(palabra[indIzq] == palabra[indDer]){
        indIzq++
        indDer--
    }else{
        console.log("no es palindromo");
        break
    }

}
if(indIzq>=indDer) console.log("es palindromo");
}
