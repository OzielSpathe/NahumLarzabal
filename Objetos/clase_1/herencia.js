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
var auto = /** @class */ (function () {
    function auto(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.kilometraje = 100;
    }
    auto.prototype.getMarca = function () {
        return this.marca;
    };
    auto.prototype.getModelo = function () {
        return this.modelo;
    };
    return auto;
}());
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo(marca, modelo, escape) {
        var _this = _super.call(this, marca, modelo) || this;
        _this.cañoEscape = escape;
        return _this;
    }
    AutoDeportivo.prototype.imprimirValor = function () {
        console.log("el auto vale 100.000 USD");
    };
    AutoDeportivo.prototype.getEscape = function () {
        return this.cañoEscape;
    };
    return AutoDeportivo;
}(auto));
var miAuto = new AutoDeportivo("fiat", "uno", 5);
console.log(miAuto.getMarca(), miAuto.getModelo());
console.log(miAuto.imprimirValor());
console.log(miAuto.getEscape());
