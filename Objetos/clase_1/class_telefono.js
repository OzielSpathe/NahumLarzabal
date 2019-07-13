var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = true;
    }
    Telefono.prototype.prenderApagarTelefono = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    Telefono.prototype.prendido = function () {
        return this.estaPrendido.;
    };
    return Telefono;
}());
var miTelefono = new Telefono();
miTelefono.prenderApagarTelefono();
console.log("esta prendido loquito" + miTelefono.prendido());
