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
var AutoChatarra = /** @class */ (function (_super) {
    __extends(AutoChatarra, _super);
    function AutoChatarra(marca, modeloDelAuto, combustible, ano, patente, motor) {
        return _super.call(this, marca, modeloDelAuto, combustible, ano, patente, motor) || this;
    }
    AutoChatarra.prototype.frenar = function () {
        this.velocidadActual -= 0;
        return this.velocidadActual;
    };
    return AutoChatarra;
}(Auto_1["default"]));
exports["default"] = AutoChatarra;
