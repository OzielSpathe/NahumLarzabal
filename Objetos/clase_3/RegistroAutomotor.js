"use strict";
exports.__esModule = true;
var Auto_1 = require("./Auto");
var fs = require("fs");
var rl = require("readline-sync");
var Camiones_1 = require("./Camiones");
var Motos_1 = require("./Motos");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.listado = [];
        this.rellenarAutos();
    }
    RegistroAutomotor.prototype.leerinfo = function (rutaArchivo) {
        var archivo = fs.readFileSync(rutaArchivo, 'utf8');
        var lineas = archivo.split('\n');
        lineas = lineas.map(function (linea) { return linea.replace('\r', ''); });
        return lineas;
    };
    RegistroAutomotor.prototype.rellenarAutos = function () {
        var crearArchivo = this.leerinfo('./info_autos.txt');
        for (var i = 0; i < crearArchivo.length; i++) {
            var list = crearArchivo[i].split(",");
            var auto_1 = this.nuevoAuto(list[0], list[1], list[2], list[3], parseInt(list[4]), list[5], parseInt(list[6]), list[7]);
            this.listado.push(auto_1);
        }
    };
    RegistroAutomotor.prototype.nuevoAuto = function (tipo, marca, modeloDelAuto, combustible, ano, patente, motor, ruedas, acoplado) {
        var autoNuevo;
        switch (tipo) {
            case "auto": {
                autoNuevo = new Auto_1["default"](tipo, marca, modeloDelAuto, combustible, ano, patente, motor);
                break;
            }
            case "moto": {
                autoNuevo = new Motos_1["default"](tipo, marca, modeloDelAuto, combustible, ano, patente, motor, ruedas);
                break;
            }
            case "camion": {
                autoNuevo = new Camiones_1["default"](tipo, marca, modeloDelAuto, combustible, ano, patente, motor, acoplado);
            }
        }
        return autoNuevo;
    };
    RegistroAutomotor.prototype.buscarAuto = function (patente) {
        for (var i = 0; i < this.listado.length; i++) {
            if (this.listado[i].getPatente() == patente) {
                return this.listado[i];
            }
            else {
                return null;
            }
        }
    };
    RegistroAutomotor.prototype.borrar = function (patente) {
        var encontrado = false;
        for (var i = 0; i < this.listado.length; i++) {
            if (this.listado[i].getPatente() == patente) {
                this.listado.splice(i, 1);
                encontrado = true;
                return "La patente fue borrada";
            }
        }
        if (encontrado == false) {
            return "La patente no existe.";
        }
    };
    RegistroAutomotor.prototype.cargarAuto = function () {
        var tipo = rl.question("que tipo de vehiculo es: ");
        var marca = rl.question("indique la marca: ");
        var combustible = rl.question("indique que combustible usa: ");
        var modeloDelAuto = rl.question("indique el modelo del Auto: ");
        var ano = rl.questionInt("indique el año del auto: ");
        var patente = rl.question("indique la patente del auto: ");
        var tipoDeMotor = rl.questionFloat("indique el motor del auto: ");
        var newAuto = new Auto_1["default"](tipo, marca, combustible, modeloDelAuto, ano, patente, tipoDeMotor);
        this.listado.push(newAuto);
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
            return this.listado.push(auto.cargarAuto());
        }
    };
    return RegistroAutomotor;
}());
exports["default"] = RegistroAutomotor;
var auto = new RegistroAutomotor();
console.log(auto);
//let registro = new RegistroAutomotor("ford", "focus", "nafta", 2006, "ABC 123", 1.6);
