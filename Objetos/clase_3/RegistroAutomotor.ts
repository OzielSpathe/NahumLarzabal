import Auto from './Auto';

import * as fs from 'fs';

import * as rl from "readline-sync";
import Camiones from "./Camiones";
import Motos from "./Motos";




class RegistroAutomotor {
    private listado: Auto[];
   

    public constructor() {
        this.listado = [];
        this.rellenarAutos();
        
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
            let auto: Auto = this.nuevoAuto(list[0], list[1], list[2], list[3], parseInt(list[4]), list[5],parseInt(list[6]),list[7]);
            this.listado.push(auto);
        }

    }

    private nuevoAuto(tipo:string, marca: string, modeloDelAuto: string, combustible: string, ano: number, patente: string, motor: number,ruedas?: number, acoplado?:string): Auto {
        let autoNuevo: Auto
        switch (tipo) {
            case "auto": {
                autoNuevo = new Auto(tipo,marca,modeloDelAuto,combustible,ano,patente,motor);
                break;
            }
            case "moto": {
                autoNuevo = new Motos(tipo,marca,modeloDelAuto,combustible,ano,patente,motor,ruedas);
                break;
            }
            case "camion": {
                autoNuevo = new Camiones(tipo,marca,modeloDelAuto,combustible,ano,patente,motor,acoplado);
            }
        }
        return autoNuevo;
    }




    public buscarAuto(patente: string): Auto {
        for (let i = 0; i < this.listado.length; i++) {
            if (this.listado[i].getPatente() == patente) {
                return this.listado[i];
            } else {
                return null ;

            }
        }
    }

      

    public borrar(patente: string): any {
        let encontrado = false;
        for (let i = 0; i < this.listado.length; i++) {
            if (this.listado[i].getPatente() == patente) {
                this.listado.splice(i, 1);
                encontrado = true;
                return "La patente fue borrada"

            }
        }
        if (encontrado == false) {
            return "La patente no existe.";
        }
    }



    public cargarAuto(): Auto {
        let tipo: string = rl.question("que tipo de vehiculo es: ")
        let marca: string = rl.question("indique la marca: ");
        let combustible: string = rl.question("indique que combustible usa: ");
        let modeloDelAuto: string = rl.question("indique el modelo del Auto: ");
        let ano: number = rl.questionInt("indique el año del auto: ");
        let patente: string = rl.question("indique la patente del auto: ");
        let tipoDeMotor: number = rl.questionFloat("indique el motor del auto: ");
        let newAuto = new Auto(tipo,marca, combustible, modeloDelAuto, ano, patente, tipoDeMotor);
        this.listado.push(newAuto);

       return newAuto
    }

    public actualizar(patente: string): any {
        let encontrado = this.buscarAuto(patente);
        if (encontrado == null ) {
            console.log("No hay ninguna patente igual");
        } else if (encontrado.getPatente() == patente) {
            this.borrar(patente);
            console.log("Ahora Actualizar los campos del auto buscado:");
            return this.listado.push(auto.cargarAuto());
        }
    }

}


let auto = new RegistroAutomotor();
/* console.log(auto);
console.log(auto.buscarAuto("ABC124"));
console.log(auto.buscarAuto("ABC123"));
console.log(auto.borrar("FGH678"));
console.log(auto);
auto.cargarAuto();
console.log(auto);
auto.actualizar("CDE345"); */
console.log(auto);





//let registro = new RegistroAutomotor("ford", "focus", "nafta", 2006, "ABC 123", 1.6);

