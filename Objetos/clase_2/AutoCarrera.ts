import Auto from './Auto'

export default class AutoCarra extends Auto{
    private diametroCañoEscape: number;

  
    constructor(marca: string, modeloDelAuto: string, combustible: string, ano: number, patente: string, motor: number, escape: number){
        super(marca, modeloDelAuto, combustible, ano, patente, motor);
        this.diametroCañoEscape = escape;

    }

    public acelerar():number{
        this.velocidadActual += 15;
        return this.velocidadActual;
    }

    

    public frenar(): number{
        this.velocidadActual -= 10;
        return this.velocidadActual;
    }
}

