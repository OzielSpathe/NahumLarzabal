"use strict";
exports.__esModule = true;
var Auto_1 = require("./Auto");
var AutoCarrera_1 = require("./AutoCarrera");
var AutoChatarra_1 = require("./AutoChatarra");
var miAuto = new Auto_1["default"]("ford", "focus", "diesel", 1989, "ZTQ284", 1.6);
console.log(miAuto);
console.log("Acelero el auto a ", miAuto.acelerar());
console.log("Acelero el auto a ", miAuto.acelerar());
console.log("freno el auto a ", miAuto.frenar());
var miAuto1 = new AutoCarrera_1["default"]("ford", "focus", "nafta", 2000, "AAA123", 2.1, 10);
console.log(miAuto1);
console.log("Acelero el auto de carrera a ", miAuto1.acelerar());
console.log("Acelero el auto de carrera a ", miAuto1.acelerar());
console.log("freno el auto de carrera a ", miAuto1.frenar());
var miAuto2 = new AutoChatarra_1["default"]("ford", "focus", "nafta", 1989, "ZRE584", 1.1);
console.log(miAuto2);
console.log("Acelero el auto chatarra a ", miAuto2.acelerar());
console.log("Acelero el auto chatarra a ", miAuto2.acelerar());
console.log("freno el auto chatarra a ", miAuto2.frenar());
