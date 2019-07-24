import { REPL_MODE_SLOPPY } from "repl";

class auto {
    private marca: string; // ve solamente dentro de la clase
    private modelo: string;
    protected kilometraje: number; // es privado dentro de la clase pero visible para la sub clase

    public constructor(marca: string, modelo: string) { // publico lo ven todos
        this.marca = marca;
        this.modelo = modelo;
        this.kilometraje = 100;
    }

    public getMarca(): string {
        return this.marca
    }

    public getModelo(): string {
        return this.modelo
    }
}

class AutoDeportivo extends auto {
    private cañoEscape: number
    public constructor(marca: string, modelo: string, escape: number) {
        super(marca, modelo);
        this.cañoEscape = escape;
    }
    
    public imprimirValor(): void{
        console.log("el auto vale 100.000 USD")
    }
    
    public getEscape(): number{
        return this.cañoEscape;
    }
}

let miAuto = new AutoDeportivo("fiat", "uno",5);
console.log(miAuto.getMarca(), miAuto.getModelo());
console.log(miAuto.imprimirValor());
console.log(miAuto.getEscape());