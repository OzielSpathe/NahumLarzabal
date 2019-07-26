"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Auto_1 = require("./Auto");
var Motos = /** @class */ (function (_super) {
    __extends(Motos, _super);
    function Motos(tipo, marca, modeloDelAuto, combustible, ano, patente, motor, ruedas) {
        var _this = _super.call(this, tipo, marca, modeloDelAuto, combustible, ano, patente, motor) || this;
        _this.ruedas = ruedas;
        return _this;
    }
    Motos.prototype.getRuedas = function () {
        return this.ruedas;
    };
    Motos.prototype.levatarMoto = function () {
        console.log("hice un willy y voy con una rueda");
    };
    Motos.prototype.acelerar = function () {
        this.velocidadActual += 4;
        return this.velocidadActual;
    };
    Motos.prototype.frenar = function () {
        this.velocidadActual -= 2;
        return this.velocidadActual;
    };
    return Motos;
}(Auto_1["default"]));
exports["default"] = Motos;
