import * as rl from "readline-sync";

class Telefono {
    private estaPrendido: boolean;
    private bateriaActual: number;

    public constructor() {
        this.estaPrendido = false;
        this.bateriaActual = 50;
    }

    public mandarMensaje(): string {
            let mensaje = rl.question(" llene su mensaje: ");
            return mensaje;
       

    }

    public hacerLlmada(): number {
            let llamar = rl.question(" ingrese el numero que desea llamar: ");
            return llamar;
        
    }

    public prenderApagar(): void {
        if (!this.estaPrendido) {
            this.estaPrendido = true;
        } else
            this.estaPrendido = false;

    }

    public getPrendido(): boolean{
        return this.estaPrendido;
    }


}


class TelefonoConCamara extends Telefono{
    public constructor(){
        super();
    }

    public sacarFotos(): string{
        return " saque una foto."
    }

}

class TelefonoConRadio extends Telefono{
    private frecuenciaActual: number;
    
    public constructor(frecuencia:number){
        super();
        this.frecuenciaActual = frecuencia;
    }

    public verFrecuencia(): number{
        return this.frecuenciaActual;
    }
}

let aux = new Telefono();
let aux1 = new TelefonoConCamara();
let aux2 = new TelefonoConRadio(150.1);

console.log(aux.getPrendido(),aux.hacerLlmada(), aux.mandarMensaje());
console.log(aux1.sacarFotos());
console.log("estoy en la radio ",aux2.verFrecuencia());