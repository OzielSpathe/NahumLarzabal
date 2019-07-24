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
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = true;
        this.bateriaActual = 50;
        this.linternaPrendida = false;
    }
    Telefono.prototype.mandarMensaje = function (msj, number) {
        this.mensaje = msj;
        this.number = number;
        this.getMensaje();
        return true;
    };
    Telefono.prototype.getMensaje = function () {
        console.log(this.mensaje, this.number);
    };
    Telefono.prototype.hacerLlamada = function () {
        console.log("marcar un numero: ");
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
        console.log(this.estaPrendido);
    };
    return Telefono;
}());
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara() {
        var _this = _super.call(this) || this;
        _this.camara = new Camara();
        return _this;
    }
    TelefonoConCamara.prototype.sacar = function () {
        return this.camara.sacarFoto();
    };
    return TelefonoConCamara;
}(Telefono));
var Camara = /** @class */ (function () {
    function Camara() {
    }
    Camara.prototype.sacarFoto = function () {
        var foto = "saque una Foto";
        return foto;
    };
    return Camara;
}());
var miTelefono = new TelefonoConCamara();
miTelefono.mandarMensaje("hola como estas", 154013832);
console.log(miTelefono.sacar());
