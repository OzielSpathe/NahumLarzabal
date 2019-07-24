class Auto {
    private tipo: string;
    private modeloDelAuto: string;
    private ano: number;
    private marca: string;
    private combustible: string;
    private patente: string;
    private tipoDeMotor: number;
    protected velocidadActual: number;
    
    

    public constructor(tipo:string, marca: string, modeloDelAuto: string, combustible: string, ano: number, patente: string, motor: number) {
        this.tipo = tipo;
        this.marca = marca;
        this.combustible = combustible;
        this.modeloDelAuto = modeloDelAuto;
        this.ano = ano;
        this.patente = patente;
        this.tipoDeMotor = motor;
        this.velocidadActual = 0;

    }

    public getTipo(): string{
        return this.tipo;
    }

    public getPatente(): string{
        return this.patente;
    }

    public getMarca(): string{
        return this.marca;
    }

    public getModeloDelAuto(): string{
        return this.modeloDelAuto;
    }

    public getCombustible(): string{
        return this.combustible;
    }

    public getAno(): number{
        return this.ano;
    }

    public getTipoMotor(): number{
        return this.tipoDeMotor
    }

    public acelerar():number{
        this.velocidadActual += 5;
        return this.velocidadActual;

    }

    public frenar():number{
        this.velocidadActual -= 2;
        return this.velocidadActual;
    }


}


export default Auto;