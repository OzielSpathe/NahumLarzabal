import Auto from './Auto'

export default class AutoChatarra extends Auto{
    constructor(marca: string, modeloDelAuto: string, combustible: string, ano: number, patente: string, motor: number){
        super(marca, modeloDelAuto, combustible, ano, patente, motor);
    }

    public frenar(): number{
        this.velocidadActual -=0;
        return this.velocidadActual;
    }
}

