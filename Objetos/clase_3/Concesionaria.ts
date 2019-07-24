import Auto from "./Auto"
import Motos from "./Motos"
import Camiones from "./Camiones"
import * as fs from 'fs';


export default class Concesionaria {
    private listaAutos: Auto[];
    private listaCamiones: Camiones[];
    private listaMotos: Motos[];

    constructor() {
        this.listaAutos = [];
        this.listaCamiones = [];
        this.listaMotos = [];
        this.rellenarAutos();
        this.rellenarMotos();
        this.rellenarCamiones();
    }

    private leerinfo(rutaArchivo: string): string[] {
        let archivo: string = fs.readFileSync(rutaArchivo, 'utf8');

        let lineas: string[] = archivo.split('\n');
        lineas = lineas.map(linea => linea.replace('\r', ''));

        return lineas;
    }

    private rellenarAutos(): void {
        let crearArchivo = this.leerinfo('./info_autos.txt');
        for (let i = 0; i < crearArchivo.length; i++) {
            let list = crearArchivo[i].split(",");
            let auto = new Auto(list[0], list[1], list[2], parseInt(list[3]), list[4], parseFloat(list[5]), parseInt(list[6]));
            this.listaAutos.push(auto);
        }

    }

    private rellenarMotos(): void {
        let crearArchivo = this.leerinfo('./info_motos.txt');
        for (let i = 0; i < crearArchivo.length; i++) {
            let list = crearArchivo[i].split(",");
            let moto = new Motos(list[0], list[1], list[2], parseInt(list[3]), list[4], parseFloat(list[5]), parseInt(list[6]));
            this.listaMotos.push(moto);
        }
    }

    private rellenarCamiones(): void {
        let crearArchivo = this.leerinfo('./info_camiones.txt');
        for (let i = 0; i < crearArchivo.length; i++) {
            let list = crearArchivo[i].split(",");
            let camion = new Camiones(list[0], list[1], list[2], parseInt(list[3]), list[4], parseFloat(list[5]), parseInt(list[6]));
            this.listaCamiones.push(camion);
        }

    }

    public buscarVehiculo(patente: string): any {
        for (let i = 0; i < this.listaAutos.length; i++) {
            if (this.listaAutos[i].getPatente() == patente) {
                return this.listaAutos[i];
            } else {
                for (let i = 0; i < this.listaMotos.length; i++) {
                    if (this.listaMotos[i].getPatente() == patente) {
                        return this.listaMotos[i];

                    } else {
                        for (let i = 0; i < this.listaCamiones.length; i++) {
                            if (this.listaCamiones[i].getPatente() == patente) {
                                return this.listaCamiones[i];
                            }
                        }
                    }
                }
            }
        }
    }
}


let vehiculo = new Concesionaria();
vehiculo.buscarVehiculo("ABC321");