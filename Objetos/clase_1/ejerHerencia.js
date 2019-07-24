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
var rl = require("readline-sync");
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = false;
        this.bateriaActual = 50;
    }
    Telefono.prototype.mandarMensaje = function () {
        var mensaje = rl.question(" llene su mensaje: ");
        return mensaje;
    };
    Telefono.prototype.hacerLlmada = function () {
        var llamar = rl.question(" ingrese el numero que desea llamar: ");
        return llamar;
    };
    Telefono.prototype.prenderApagar = function () {
        if (!this.estaPrendido) {
            this.estaPrendido = true;
        }
        else
            this.estaPrendido = false;
    };
    Telefono.prototype.getPrendido = function () {
        return this.estaPrendido;
    };
    return Telefono;
}());
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara() {
        return _super.call(this) || this;
    }
    TelefonoConCamara.prototype.sacarFotos = function () {
        return " saque una foto.";
    };
    return TelefonoConCamara;
}(Telefono));
var TelefonoConRadio = /** @class */ (function (_super) {
    __extends(TelefonoConRadio, _super);
    function TelefonoConRadio(frecuencia) {
        var _this = _super.call(this) || this;
        _this.frecuenciaActual = frecuencia;
        return _this;
    }
    TelefonoConRadio.prototype.verFrecuencia = function () {
        return this.frecuenciaActual;
    };
    return TelefonoConRadio;
}(Telefono));
var aux = new Telefono();
var aux1 = new TelefonoConCamara();
var aux2 = new TelefonoConRadio(150.1);
console.log(aux.getPrendido(), aux.hacerLlmada(), aux.mandarMensaje());
console.log(aux1.sacarFotos());
console.log("estoy en la radio ", aux2.verFrecuencia());
