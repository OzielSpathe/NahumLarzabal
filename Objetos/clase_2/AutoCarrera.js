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
var AutoCarra = /** @class */ (function (_super) {
    __extends(AutoCarra, _super);
    function AutoCarra(marca, modeloDelAuto, combustible, ano, patente, motor, escape) {
        var _this = _super.call(this, marca, modeloDelAuto, combustible, ano, patente, motor) || this;
        _this.diametroCañoEscape = escape;
        return _this;
    }
    AutoCarra.prototype.acelerar = function () {
        this.velocidadActual += 15;
        return this.velocidadActual;
    };
    AutoCarra.prototype.frenar = function () {
        this.velocidadActual -= 10;
        return this.velocidadActual;
    };
    return AutoCarra;
}(Auto_1["default"]));
exports["default"] = AutoCarra;
