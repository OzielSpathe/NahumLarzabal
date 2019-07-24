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
    function Motos(marca, modeloDelAuto, combustible, ano, patente, motor, rueda) {
        var _this = _super.call(this, marca, modeloDelAuto, combustible, ano, patente, motor, rueda) || this;
        _this.cantidadRuedas = 2;
        return _this;
    }
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
