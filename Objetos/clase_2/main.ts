import Auto from './Auto'
import AutoCarrera from './AutoCarrera';
import AutoChatarra from './AutoChatarra';

let miAuto = new Auto("cheverolet","corsa","diesel",1989,"ZTQ284",1.6);
console.log(miAuto);
console.log("Acelero el auto a ", miAuto.acelerar());
console.log("Acelero el auto a ", miAuto.acelerar());

console.log("freno el auto a ", miAuto.frenar());


let miAuto1 = new AutoCarrera ("ford","focus","nafta",2000,"AAA123",2.1,10);
console.log(miAuto1);
console.log("Acelero el auto de carrera a ", miAuto1.acelerar());
console.log("Acelero el auto de carrera a ", miAuto1.acelerar());

console.log("freno el auto de carrera a ", miAuto1.frenar());



let miAuto2 = new AutoChatarra ("citroen","c3","nafta",1989,"ZRE584",1.1);
console.log(miAuto2);
console.log("Acelero el auto chatarra a ", miAuto2.acelerar());
console.log("Acelero el auto chatarra a ", miAuto2.acelerar());

console.log("freno el auto chatarra a ", miAuto2.frenar());
