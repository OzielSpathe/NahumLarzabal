import RegistroAutomotor from "./RegistroAutomotor";
import Auto from "./Auto";

import * as rl from "readline-sync";
import { threadId } from "worker_threads";

export default class Camiones extends Auto {
    private acoplado: string;

    constructor(tipo: string, marca: string, modeloDelAuto: string, combustible: string, ano: number, patente: string, motor: number, acoplado: string) {
        super(tipo, marca, modeloDelAuto, combustible, ano, patente, motor);
        this.acoplado = acoplado;

    }

    public getAcoplado(): string {
        return this.acoplado;
    }

    public acelerar(): number {
        this.velocidadActual += 3;
        return this.velocidadActual;

    }

    public frenar(): number {
        this.velocidadActual -= 1;
        return this.velocidadActual;
    }



}