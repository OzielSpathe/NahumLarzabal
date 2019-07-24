"use strict";
exports.__esModule = true;
var Auto_1 = require("./Auto");
var Motos_1 = require("./Motos");
var Camiones_1 = require("./Camiones");
var fs = require("fs");
var Concesionaria = /** @class */ (function () {
    function Concesionaria() {
        this.listaAutos = [];
        this.listaCamiones = [];
        this.listaMotos = [];
        this.rellenarAutos();
        this.rellenarMotos();
        this.rellenarCamiones();
    }
    Concesionaria.prototype.leerinfo = function (rutaArchivo) {
        var archivo = fs.readFileSync(rutaArchivo, 'utf8');
        var lineas = archivo.split('\n');
        lineas = lineas.map(function (linea) { return linea.replace('\r', ''); });
        return lineas;
    };
    Concesionaria.prototype.rellenarAutos = function () {
        var crearArchivo = this.leerinfo('./info_autos.txt');
        for (var i = 0; i < crearArchivo.length; i++) {
            var list = crearArchivo[i].split(",");
            var auto = new Auto_1["default"](list[0], list[1], list[2], parseInt(list[3]), list[4], parseFloat(list[5]), parseInt(list[6]));
            this.listaAutos.push(auto);
        }
    };
    Concesionaria.prototype.rellenarMotos = function () {
        var crearArchivo = this.leerinfo('./info_motos.txt');
        for (var i = 0; i < crearArchivo.length; i++) {
            var list = crearArchivo[i].split(",");
            var moto = new Motos_1["default"](list[0], list[1], list[2], parseInt(list[3]), list[4], parseFloat(list[5]), parseInt(list[6]));
            this.listaMotos.push(moto);
        }
    };
    Concesionaria.prototype.rellenarCamiones = function () {
        var crearArchivo = this.leerinfo('./info_camiones.txt');
        for (var i = 0; i < crearArchivo.length; i++) {
            var list = crearArchivo[i].split(",");
            var camion = new Camiones_1["default"](list[0], list[1], list[2], parseInt(list[3]), list[4], parseFloat(list[5]), parseInt(list[6]));
            this.listaCamiones.push(camion);
        }
    };
    Concesionaria.prototype.buscarVehiculo = function (patente) {
        for (var i = 0; i < this.listaAutos.length; i++) {
            if (this.listaAutos[i].getPatente() == patente) {
                return this.listaAutos[i];
            }
            else {
                for (var i_1 = 0; i_1 < this.listaMotos.length; i_1++) {
                    if (this.listaMotos[i_1].getPatente() == patente) {
                        return this.listaMotos[i_1];
                    }
                    else {
                        for (var i_2 = 0; i_2 < this.listaCamiones.length; i_2++) {
                            if (this.listaCamiones[i_2].getPatente() == patente) {
                                return this.listaCamiones[i_2];
                            }
                        }
                    }
                }
            }
        }
    };
    return Concesionaria;
}());
exports["default"] = Concesionaria;
var vehiculo = new Concesionaria();
vehiculo.buscarVehiculo("ABC321");
