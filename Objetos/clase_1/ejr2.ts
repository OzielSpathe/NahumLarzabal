import Auto from './ejer1';

import * as fs from 'fs';

import * as rl from "readline-sync";

class RegistroAutomotor {
    private listaAutos: Auto[];


    public constructor() {
        this.listaAutos = [];
        this.rellenar();
    }

    private leerinfo(rutaArchivo: string): string[] {
        let archivo: string = fs.readFileSync(rutaArchivo, 'utf8');

        let lineas: string[] = archivo.split('\n');
        lineas = lineas.map(linea => linea.replace('\r', ''));

        return lineas;
    }

    private rellenar(): void {
        let crearArchivo = this.leerinfo('./info_autos.txt');
        for (let i = 0; i < crearArchivo.length; i++) {
            let list = crearArchivo[i].split(",");
            let auto = new Auto(list[0], list[1], list[2], parseInt(list[3]), list[4], parseFloat(list[5]));
            this.listaAutos.push(auto);
        }

    }

    public buscarAuto(patente: string): Auto {
        for (let i = 0; i < this.listaAutos.length; i++) {
            if (this.listaAutos[i].getPatente() == patente) {
                return this.listaAutos[i];
            } else {
                return null ;

            }
        }
    }

    public borrar(patente: string): any {
        let encontrado = false;
        for (let i = 0; i < this.listaAutos.length; i++) {
            if (this.listaAutos[i].getPatente() == patente) {
                this.listaAutos.splice(i, 1);
                encontrado = true;
                return "La patente fue borrada"

            }
        }
        if (encontrado == false) {
            return "La patente no existe.";
        }
    }



    public cargarAuto(): Auto {
        let marca: string = rl.question("indique la marca: ");
        let combustible: string = rl.question("indique que combustible usa: ");
        let modeloDelAuto: string = rl.question("indique el modelo del Auto: ");
        let ano: number = rl.questionInt("indique el año del auto: ");
        let patente: string = rl.question("indique la patente del auto: ");
        let tipoDeMotor: number = rl.questionFloat("indique el motor del auto: ");
        let newAuto = new Auto(marca, combustible, modeloDelAuto, ano, patente, tipoDeMotor);
        this.listaAutos.push(newAuto);

        return newAuto;
    }

    public actualizar(patente: string): any {
        let encontrado = this.buscarAuto(patente);
        if (encontrado == null ) {
            console.log("No hay ninguna patente igual");
        } else if (encontrado.getPatente() == patente) {
            this.borrar(patente);
            console.log("Ahora Actualizar los campos del auto buscado:");
            return this.listaAutos.push(auto.cargarAuto());
        }
    }

}


let auto = new RegistroAutomotor();
console.log(auto);
console.log(auto.buscarAuto("ABC124"));
console.log(auto.buscarAuto("ABC123"));
console.log(auto.borrar("FGH678"));
console.log(auto);
auto.cargarAuto();
console.log(auto);
auto.actualizar("ABC123");
console.log(auto);





//let registro = new RegistroAutomotor("ford", "focus", "nafta", 2006, "ABC 123", 1.6);

