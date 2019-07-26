"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(tipo, marca, modeloDelAuto, combustible, ano, patente, motor) {
        this.tipo = tipo;
        this.marca = marca;
        this.combustible = combustible;
        this.modeloDelAuto = modeloDelAuto;
        this.ano = ano;
        this.patente = patente;
        this.tipoDeMotor = motor;
        this.velocidadActual = 0;
    }
    Auto.prototype.getTipo = function () {
        return this.tipo;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModeloDelAuto = function () {
        return this.modeloDelAuto;
    };
    Auto.prototype.getCombustible = function () {
        return this.combustible;
    };
    Auto.prototype.getAno = function () {
        return this.ano;
    };
    Auto.prototype.getTipoMotor = function () {
        return this.tipoDeMotor;
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
