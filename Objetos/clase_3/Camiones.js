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
var rl = require("readline-sync");
var Camiones = /** @class */ (function (_super) {
    __extends(Camiones, _super);
    function Camiones(marca, modeloDelAuto, combustible, ano, patente, motor, rueda) {
        return _super.call(this, marca, modeloDelAuto, combustible, ano, patente, motor, rueda) || this;
    }
    Camiones.prototype.cantidadAcoplado = function () {
        if (this.cantidadRuedas != 4) {
            this.acoplado = rl.question("cuantos acoplados lleva? ");
            if (this.acoplado != "0") {
                console.log(" es un camion con", this.acoplado, "acoplados");
            }
            else {
                console.log("no lleva acoplado");
            }
        }
        else if (this.cantidadRuedas == 4) {
            this.acoplado = "No es un camion";
        }
        return this.acoplado;
    };
    Camiones.prototype.acelerar = function () {
        this.velocidadActual += 3;
        return this.velocidadActual;
    };
    Camiones.prototype.frenar = function () {
        this.velocidadActual -= 1;
        return this.velocidadActual;
    };
    return Camiones;
}(Auto_1["default"]));
exports["default"] = Camiones;
