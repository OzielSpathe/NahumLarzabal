"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(marca, modeloDelAuto, combustible, ano, patente, motor, rueda) {
        this.marca = marca;
        this.combustible = combustible;
        this.modeloDelAuto = modeloDelAuto;
        this.ano = ano;
        this.patente = patente;
        this.tipoDeMotor = motor;
        this.velocidadActual = 0;
        this.cantidadRuedas = rueda;
    }
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.acelerar = function () {
        this.velocidadActual += 5;
        return this.velocidadActual;
    };
    Auto.prototype.frenar = function () {
        this.velocidadActual -= 2;
        return this.velocidadActual;
    };
    return Auto;
}());
exports["default"] = Auto;
