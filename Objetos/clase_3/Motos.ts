import Auto from "./Auto"

export default class Motos extends Auto {
    private ruedas: number;
    constructor(tipo: string, marca: string, modeloDelAuto: string, combustible: string, ano: number, patente: string, motor: number,ruedas:number){
        super(tipo, marca, modeloDelAuto, combustible, ano, patente, motor);
        this.ruedas = ruedas;
        
        
    }

    public getRuedas():number{
        return this.ruedas;
    }

    public levatarMoto(): void{
        console.log("hice un willy y voy con una rueda");
    }

    
    public acelerar():number{
        this.velocidadActual += 4;
        return this.velocidadActual;

    }

    public frenar():number{
        this.velocidadActual -= 2;
        return this.velocidadActual;
    }
}