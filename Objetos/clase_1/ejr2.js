"use strict";
exports.__esModule = true;
var ejer1_1 = require("./ejer1");
var fs = require("fs");
var rl = require("readline-sync");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.listaAutos = [];
        this.rellenar();
    }
    RegistroAutomotor.prototype.leerinfo = function (rutaArchivo) {
        var archivo = fs.readFileSync(rutaArchivo, 'utf8');
        var lineas = archivo.split('\n');
        lineas = lineas.map(function (linea) { return linea.replace('\r', ''); });
        return lineas;
    };
    RegistroAutomotor.prototype.rellenar = function () {
        var crearArchivo = this.leerinfo('./info_autos.txt');
        for (var i = 0; i < crearArchivo.length; i++) {
            var list = crearArchivo[i].split(",");
            var auto_1 = new ejer1_1["default"](list[0], list[1], list[2], parseInt(list[3]), list[4], parseFloat(list[5]));
            this.listaAutos.push(auto_1);
        }
    };
    RegistroAutomotor.prototype.buscarAuto = function (patente) {
        for (var i = 0; i < this.listaAutos.length; i++) {
            if (this.listaAutos[i].getPatente() == patente) {
                return this.listaAutos[i];
            }
            else {
                return null;
            }
        }
    };
    RegistroAutomotor.prototype.borrar = function (patente) {
        var encontrado = false;
        for (var i = 0; i < this.listaAutos.length; i++) {
            if (this.listaAutos[i].getPatente() == patente) {
                this.listaAutos.splice(i, 1);
                encontrado = true;
                return "La patente fue borrada";
            }
        }
        if (encontrado == false) {
            return "La patente no existe.";
        }
    };
    RegistroAutomotor.prototype.cargarAuto = function () {
        var marca = rl.question("indique la marca: ");
        var combustible = rl.question("indique que combustible usa: ");
        var modeloDelAuto = rl.question("indique el modelo del Auto: ");
        var ano = rl.questionInt("indique el año del auto: ");
        var patente = rl.question("indique la patente del auto: ");
        var tipoDeMotor = rl.questionFloat("indique el motor del auto: ");
        var newAuto = new ejer1_1["default"](marca, combustible, modeloDelAuto, ano, patente, tipoDeMotor);
        this.listaAutos.push(newAuto);
        return newAuto;
    };
    RegistroAutomotor.prototype.actualizar = function (patente) {
        var encontrado = this.buscarAuto(patente);
        if (encontrado == null) {
            console.log("No hay ninguna patente igual");
        }
        else if (encontrado.getPatente() == patente) {
            this.borrar(patente);
            console.log("Ahora Actualizar los campos del auto buscado:");
            return this.listaAutos.push(auto.cargarAuto());
        }
    };
    return RegistroAutomotor;
}());
var auto = new RegistroAutomotor();
/*console.log(auto);
console.log(auto.buscarAuto("ABC124"));
console.log(auto.buscarAuto("ABC123"));
console.log(auto.borrar("FGH678"));
console.log(auto);
auto.cargarAuto();
console.log(auto);*/
auto.actualizar("ABC123");
console.log(auto);
//let registro = new RegistroAutomotor("ford", "focus", "nafta", 2006, "ABC 123", 1.6);
