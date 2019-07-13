"use strict";
/* Auto
variables internas son Privadas--
-Prendido y Apagado : boolean
-modelo del auto : string
-marca : string
-cantidad de nafta : number
-color de auto : string

metodos:
-prendido(): void
-acelerarelauto(): void
-bajarvelocidad(): void
-estadodenafta(): void

*/
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(marca, modeloDelAuto, combustible, ano, patente, motor) {
        this.marca = marca;
        this.combustible = combustible;
        this.modeloDelAuto = modeloDelAuto;
        this.ano = ano;
        this.patente = patente;
        this.tipoDeMotor = motor;
    }
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    return Auto;
}());
/*
let miAuto = new Auto("ford", "focus", "nafta", 2006, "ABC 123", 1.6);


console.log(miAuto); */
exports["default"] = Auto;
