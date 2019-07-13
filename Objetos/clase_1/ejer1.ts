/* Auto
variables internas son Privadas--
-Prendido y Apagado : boolean
-modelo del auto : string
-marca : string
-cantidad de nafta : number
-color de auto : string

metodos:
-prendido(): void
-acelerarelauto(): void
-bajarvelocidad(): void
-estadodenafta(): void

*/

class Auto {
    private modeloDelAuto: string;
    private ano: number;
    private marca: string;
    private combustible: string;
    private patente: string;
    private tipoDeMotor: number;

    public constructor(marca: string, modeloDelAuto: string, combustible: string, ano: number, patente: string, motor: number) {
        this.marca = marca;
        this.combustible = combustible;
        this.modeloDelAuto = modeloDelAuto;
        this.ano = ano;
        this.patente = patente;
        this.tipoDeMotor = motor;

    }
    public getPatente(): string{
        return this.patente;
    }

}
/* 
let miAuto = new Auto("ford", "focus", "nafta", 2006, "ABC 123", 1.6);


console.log(miAuto); */

export default Auto;