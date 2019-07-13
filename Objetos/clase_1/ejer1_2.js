var monitor = /** @class */ (function () {
    function monitor(marcaMonitor, pulgadas) {
        this.estaPrendido = false;
        this.marca = marcaMonitor;
        this.pulgadas = pulgadas;
    }
    monitor.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    monitor.prototype.prendido = function () {
        return this.estaPrendido;
    };
    return monitor;
}());
var miMonitor = new monitor("samsung", 42);
miMonitor.prenderApagar();
console.log(miMonitor);
